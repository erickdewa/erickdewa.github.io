from PIL import Image
import random
import json

faceProbabilities = {1: 0.3, 2: 0.7}
bodyProbabilities = {1: 0.5, 2: 0.3, 3: 0.18, 4: 0.02}
backgroundProbabilities = {1: 0.6, 2: 0.2, 3: 0.15, 4: 0.05}

faceName = {1: 'Hahaha', 2: 'Wkwkwk'}
bodyName = {1: 'Pinapple', 2: 'Chery', 3: 'Bluebarry', 4: 'Eggplant'}
backgroundName = {1: 'Yellow', 2: 'Green', 3: 'Grey', 4: 'Gladient'}

def generate_random_number(probabilities):
    # Memastikan total probabilitas sama dengan 1
    assert sum(probabilities.values()) == 1.0, "Total probabilitas harus sama dengan 1"

    # Mendapatkan angka acak antara 0 dan 1
    random_value = random.uniform(0, 1)

    # Menentukan elemen berdasarkan probabilitasnya
    cumulative_probability = 0
    for number, probability in probabilities.items():
        cumulative_probability += probability
        if random_value <= cumulative_probability:
            return number

def generate(tokenID):
    faceID = generate_random_number(faceProbabilities)
    bodyID = generate_random_number(bodyProbabilities)
    backgroundID = generate_random_number(backgroundProbabilities)

    # Open the images
    bg = Image.open('Background/' + str(backgroundID) + '.png')
    body = Image.open('Body/' + str(bodyID) + '.png').resize([300, 300])
    face = Image.open('Faces/' + str(faceID) + '.png')

    # Ensure both images have the same size
    if bg.size != body.size:
        raise ValueError("Images must have the same size")
    
    if bg.size != face.size:
        raise ValueError("Images must have the same size")

    # Create a new image with RGBA mode
    merged_img = Image.new('RGBA', bg.size)
    merged_img.paste(bg, (0, 0), bg)
    merged_img.paste(body, (0, 0), body.convert('RGBA'))
    merged_img.paste(face, (0, 0), face.convert('RGBA'))

    # Save the merged image
    merged_img.save('Generate/Image/' + str(tokenID) + '.png', "PNG")

    # Generate JSON
    data = {
        'image': 'https://erickdewa.github.io/Generate/Image/' + str(tokenID) + '.png',
        'name': 'Miumicream #' + str(tokenID),
        'description': 'Miumicream with randomly NFT',
        'attributes' : [
            {
                "trait_type": "Background", 
                "value": backgroundName[backgroundID]
            }, 
            {
                "trait_type": "Body", 
                "value": bodyName[bodyID]
            },
            {
                "trait_type": "Face",
                "value": faceName[faceID]
            }
        ]
    }

    with open('Generate/Json/' + str(tokenID) + '.json', 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

# Call Function Generator
for i in range(1000):
    if((i + 1) > 100) :
        generate(i + 1)
