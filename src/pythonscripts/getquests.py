import urllib.request
from bs4 import BeautifulSoup
import json
import re

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

                if cells[4].find('a') is None:
                    quest['rewards'] = cells[4].get_text().rstrip()
                else:
                    #quest['rewards'] = cells[4].find('a').get('href')

                    keyword = '/wiki/'
                    text = ''

                    a_href_list = cells[4].find_all('a')

                    for a_href in a_href_list:
                        print(a_href.get('href') + ' ' + text)
                        if text.rstrip() in a_href.get('href').rstrip() and text != '':
                            print('asdasd')
                            continue


                        if keyword in a_href.get('href'):
                            if 'What_are_buckets' in a_href.get('href'):
                                text += 'Bucket '
                            elif 'Food_supply_'.lower() in a_href.get('href').lower():
                                text += 'Food '
                            elif '_Improvement_Arsenal' in a_href.get('href'):
                                text += 'Screws '
                            else:
                                text += a_href.get('href').rstrip().split(keyword, 1)[1] + ' '
                        else:
                            text += a_href.get('href').rstrip() + ' '
                    

                    if not cells[4].get_text().rstrip() in text.rstrip() and len(a_href_list) == 0:
                        text += cells[4].get_text().rstrip() + ' '
                    quest['rewards'] = text 

                    print(quest['rewards'])
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