import urllib.request
from bs4 import BeautifulSoup
import json
import re
import pprint
import threading


data_ships = []
ships_done = []

exclude_classes = [
    'Aviation Cruiser',
    'Aviation Battleship'
]


def get_html(url):
    response = urllib.request.urlopen(url)
    return response.read()


def parse_ship_data(html, class_name):
    global data_ships
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

        clear_td_reg = r'<\/?td.*?>'

        remodel_data["consumption"] = re.sub(clear_td_reg, '', str(rows[10]).replace('data-src', 'src'))

        if rows[11].find('td').b.text == "Remodel Level":
            remodel_data["remodel_level"] = re.sub(clear_td_reg, '', str(rows[12].find('td')).replace('data-src', 'src'))
        else:
            remodel_data['remodel_level'] = '<b>Level 1</b>'
    
        equipment = [
            str(rows[14].find_all('td')[0]).replace('data-src', 'src') + str(rows[14].find_all('td')[1]),
            str(rows[15].find_all('td')[0]).replace('data-src', 'src') + str(rows[15].find_all('td')[1]),
            str(rows[16].find_all('td')[0]).replace('data-src', 'src') + str(rows[16].find_all('td')[1]),
            str(rows[17].find_all('td')[0]).replace('data-src', 'src') + str(rows[17].find_all('td')[1])
        ]

        for i, equip in enumerate(equipment):
            equipment[i] = re.sub(clear_td_reg, '', equip).strip()
        remodel_data['equipment'] = equipment

        data['stats'].append(remodel_data)

    data_ships.append(data)


def parse_ship_class(ships, name):
    global ships_done
    for ship in ships:
        #if len([ship_done for ship_done in ships_done if ship['href'] == ship_done]) != 0:
        if ship['href'] in ships_done:
            print(ship['href'].replace('/wiki/', '') + ' already parsed, continuing...')
            continue
        
        ships_done.append(ship['href'])
        print("Parsing " + ship.text + "....")
        parse_ship_data(get_html("http://kancolle.wikia.com" + ship['href']), name)
    print(str(threading.current_thread()) + ' finished')


def make_chunks(data, chunk_size):
    while data:
        chunk, data = data[:chunk_size], data[chunk_size:]
        yield chunk  


def parse_ships(html):
    soup = BeautifulSoup(html, 'lxml')
    table = soup.find('table', class_="wikitable")

    threads = []

    for row in table.find_all('tr')[1:]:
        cols = row.find_all('td')
        name = cols[0].a.text
        if name.strip() in exclude_classes:
            continue
        ships = cols[1].find_all('a', href=True)
        
        for ships_chunk in make_chunks(ships, 20):
            t = threading.Thread(target=parse_ship_class, args=(ships_chunk, name, ))
            t.start()
            threads.append(t)


    print(str(len(threads)) + ' threads was created')
    for thread in threads:
        thread.join()


def main():
    global data_ships
    parse_ships(get_html("http://kancolle.wikia.com/wiki/Ship"))
    with open('ships.json', 'w') as f:
        json.dump(data_ships, f)


if __name__ == "__main__":
    main()
