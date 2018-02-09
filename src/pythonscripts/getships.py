import urllib.request
from bs4 import BeautifulSoup
import json
import re
import pprint

def get_html(url):
    response = urllib.request.urlopen(url)
    return response.read()


def parse_ship_data(html, class_name):
    data = {}
    soup = BeautifulSoup(html, 'lxml')
    tables = soup.find_all('table', class_='typography-xl-optout infobox infobox-kai infobox-ship')
    
    name = tables[0].find_all('tr')[0].td.p.span.b.text

    data['name'] = name.strip()
    data['class_name'] = class_name.strip()

    data['stats'] = []
    
    for table in tables:
        rows = table.find_all('tr')
        remodel_data = {}

        remodel_data['japanese_name'] = rows[0].find_all('div')[1].find('span', lang='ja').text
        remodel_data['description'] = rows[0].find_all('p')[1].b.text
        remodel_data['hp'] = rows[3].find_all('td')[1].b.text
        remodel_data['firepower'] = rows[3].find_all('td')[3].b.text
        remodel_data['armor'] = rows[4].find_all('td')[1].b.text
        remodel_data['torpedo'] = rows[4].find_all('td')[3].b.text
        remodel_data['evasion'] = rows[5].find_all('td')[1].b.text
        remodel_data['aa'] = rows[5].find_all('td')[3].b.text
        remodel_data['aircraft'] = rows[6].find_all('td')[1].b.text
        remodel_data['asw'] = rows[6].find_all('td')[3].b.text
        remodel_data['speed'] = rows[7].find_all('td')[1].b.text
        remodel_data['los'] = rows[7].find_all('td')[3].b.text
        remodel_data['range'] = rows[8].find_all('td')[1].b.text
        remodel_data['luck'] = rows[8].find_all('td')[3].b.text

        remodel_data['image'] = rows[1].find('a', href=True)['href']

        if rows[11].find('td').b.text == "Remodel Level":
            remodel_data["remodel_level"] = rows[12].find('td').b.text
        else:
            remodel_data['remodel_level'] = 1

        equipment = [
            rows[14].find_all('td')[1].text.strip(),
            rows[15].find_all('td')[1].text.strip(),
            rows[16].find_all('td')[1].text.strip(),
            rows[17].find_all('td')[1].text.strip()
        ]

        remodel_data['equipment'] = equipment

        data['stats'].append(remodel_data)

    return data


def parse_ships(html):
    data = []
    soup = BeautifulSoup(html, 'lxml')
    table = soup.find('table', class_="wikitable")

    ships_done = []

    for row in table.find_all('tr')[1:]:
        cols = row.find_all('td')
        name = cols[0].a.text
        print("Parsing class " + name + "....")
        ships = cols[1].find_all('a', href=True)
        total_ships_done = 0
        for ship in ships:
            
            parsed = False
            for ship_done in ships_done:
                if ship['href'] == ship_done:
                    print(ship['href'] + ' already parsed, continuing...')
                    parsed = True
            
            if parsed:
                continue

            print("Parsing " + ship.text + "....")
            ship_data = parse_ship_data(get_html("http://kancolle.wikia.com" + ship['href']), name)
            ships_done.append(ship['href'])
            data.append(ship_data)
            total_ships_done += 1
            print("Parsed " + str(total_ships_done) + " of " + str(len(ships)))
    return data

def parse_equip(html):
    data = {}
    soup = BeautifulSoup(html, 'lxml')

    tables = soup.find_all('table', class_='wikitable typography-xl-optout')

    for table in tables:
        rows = table.find_all('tr')

        for row in rows[1:-1]:
            cols = row.find_all('td')

            equip_class = cols[3].text.rstrip()

            found = False
            for k in data:
                if equip_class == k:
                    found = True

            if not found:
                data[equip_class] = {}

            name = cols[2].text.rstrip()

            data[equip_class][name] = {}
            data[equip_class][name]['Classes'] = cols[5].text.rstrip()
            data[equip_class][name]['Craftable'] = cols[6].text.rstrip()
            data[equip_class][name]['Stats'] = {}

            stats_num = re.findall(r'</a>(.*?)<', str(cols[4]), re.DOTALL)

            index = 0
            for stat in cols[4].find_all('a'):
                data[equip_class][name]['Stats'][stat['title']] = stats_num[index]

    return data


def main():
    # data_equip = parse_equip(get_html("http://kancolle.wikia.com/wiki/Equipment"))
    # with open('equip.json', 'w') as f:
    #     json.dump(data_equip, f)
    data_ships = parse_ships(get_html("http://kancolle.wikia.com/wiki/Ship"))
    with open('ships.json', 'w') as f:
        json.dump(data_ships, f)


if __name__ == "__main__":
    main()


