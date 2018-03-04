import urllib.request
from bs4 import BeautifulSoup
import json
import re

regex_rules = [
    r'<div class=\"tooltip-contents\">.*/div>',
    #r'alt=\".*\"',
    #r'<noscript>.*/noscript>',
    r'</*td>'
]

def get_html(url):
    response = urllib.request.urlopen(url)
    return response.read()

def parse_quests(html):
    data = []
    soup = BeautifulSoup(html, 'lxml')
    tables = soup.find_all('table', style="width:100%;text-align:center")

    for table in tables:
        rows = table.find_all('tr')

        j = 0
        quest = {}
        for row in rows[2:]:
            
            if not j % 2:
                quest['name'] = row.find_all('td')[0].get_text().rstrip()
                j += 1
            else:
                cells = row.find_all('td')
                quest['requirements'] = cells[0].get_text().rstrip()
                quest['resources'] = cells[2].get_text().rstrip()
                
                rewards = str(cells[4]).replace('data-src', 'src')
                
                #Clear rewards from all html shit
                for rule in regex_rules:
                    rewards = re.sub(rule, '', rewards)

                delete_image_reg = r'(width|height)=\"[^3]+?\"'
                rewards = re.sub(delete_image_reg, 'width="0"', rewards)
                
              
                url_reg = r'\"(\/wiki\/.+?)\"' #r'(\/wiki\/.*[^"])'
                rewards = re.sub(url_reg, r'http://kancolle.wikia.com\1', rewards)
                quest['rewards'] = rewards

                quest['note'] = re.sub(r"(\w)(U)", r"\1 \2", cells[6].get_text().rstrip())

                data.append(quest)
                quest = {}
                j += 1

    return data

def main():
    quests = parse_quests(get_html("http://kancolle.wikia.com/wiki/Quests"))
    with open('quests.json', 'w') as f:
        json.dump(quests, f)

if __name__ == "__main__":
    main()