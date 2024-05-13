import csv
from collections import OrderedDict
import json

with open('drops.csv', 'r') as file:
  csvReader = csv.reader(file)
  lineCount = 0
  dropCounter = {}
  annihilusData = []
  hellfireTorchData = []
  facetData = []
  for row in csvReader:
    if lineCount == 0:
      print(f'Column names are {", ".join(row)}')
      lineCount += 1
    else:
      dropCounter[row[2]] = dropCounter.get(row[2], 0) + 1
      lineCount += 1
      if row[2] == 'Annihilus':
        statsString = row[4]
        stats = statsString.split('/')
        print(stats)
        annihilusData.append({
          'attributes': stats[0],
          'resistances': stats[1],
          'experience': stats[2]
        })
      elif row[2] == 'Hellfire Torch':
        statsString = row[4]
        stats = statsString.split('/')
        print(stats)
        hellfireTorchData.append({
          'class': stats[0],
          'attributes': stats[1],
          'resistances': stats[2]
        })
      elif row[2] == 'Rainbow Facet':
        statsString = row[4]
        stats = statsString.split('/')
        print(stats)
        facetData.append({
          'enemyResistance': stats[0],
          'skillDamage': stats[1],
          'element': stats[2],
          'when': stats[3],
        })
  # print(dropCounter)
  dropCounterOrdered = OrderedDict(sorted(dropCounter.items(), key=lambda t: t[0]))
  dropJson = json.dumps(dropCounterOrdered, indent=2)
  print(dropJson)
  dropsFile = open('drops.json', 'w')
  dropsFile.write(dropJson)
  dropsFile.close()
  annihilusFile = open('annihilus.json', 'w')
  annihilusFile.write(json.dumps(annihilusData, indent=2))
  annihilusFile.close()
  torchFile = open('hellfire-torch.json', 'w')
  torchFile.write(json.dumps(hellfireTorchData, indent=2))
  torchFile.close()
  facetFile = open('facet.json', 'w')
  facetFile.write(json.dumps(facetData, indent=2))
  facetFile.close()
