from datetime import datetime
import sys
import json

index = 0
while index < 100:
    with open('Generate/Json/' + str(index + 1) + '.json', 'r') as file:
        jsonFile = json.load(file)

        data = {
            'id': (index + 1),
            'name': '#' + str(index + 1),
            'description': jsonFile['description'],
            'image': 'ipfs://QmRKg7btmVJUdhGXwBvpBs4p8xAHHE7N3zS7RGk1EZkQRE/' + str(index + 1) + '.png',
            'date': datetime.now().strftime("%Y%m%d%H%M%S"),
            'attributes': jsonFile['attributes'],
        }

        with open('Generate/Json/' + str(index + 1) + '.json', 'w', encoding='utf-8') as file:
            json.dump(data, file, ensure_ascii=False, indent=4)

    index += 1

sys.exit()