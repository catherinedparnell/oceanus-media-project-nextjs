import json

# get arrays from split json
with open('/Users/catherineparnell/envs-final/src/data/plastic-in-oceans.json') as json_file:
    data = json.load(json_file)
    ocean_labels = []
    macroplastic_values = []
    microplastic_values = []
    for pair in data['count']:
        ocean_labels.append(pair['label'])
        microplastic_values.append(pair['value'])
    for pair in data['weight']:
        macroplastic_values.append(pair['value'])

# create dictionary
data = {} 
data['ocean_labels'] = ocean_labels
data['microplastic_values'] = microplastic_values
data['macroplastic_values'] = macroplastic_values

# output dictionary as cleaned json
with open('cleaned-plastic-in-oceans.json', 'w') as outfile:
    json.dump(data, outfile)