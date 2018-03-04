import urllib.request
from bs4 import BeautifulSoup
import json
import re

def get_html(url):
    response = urllib.request.urlopen(url)
    return response.read()

def parse_equip(html):
    data = []
    soup = BeautifulSoup(html, 'lxml')

    tables = soup.find_all('table', class_='wikitable typography-xl-optout')

    for table in tables:
        rows = table.find_all('tr')

        for row in rows:
            cols = row.find_all('td')

            # For th rows
            if len(cols) <= 1:
                continue

            equip_data = {}
            equip_data['name'] = str(cols[2])
            equip_data['class'] = cols[3].text.rstrip()

            equip_data['classes'] = cols[5].text.rstrip()
            equip_data['craftable'] = cols[6].text.rstrip()
            equip_data['stats'] = str(cols[4]).replace('data-src', 'src')

            data.append(equip_data)

    return data


def main():
    data_equip = parse_equip(get_html("http://kancolle.wikia.com/wiki/Equipment"))
    with open('equip.json', 'w') as f:
        json.dump(data_equip, f)

if __name__ == "__main__":
    main()