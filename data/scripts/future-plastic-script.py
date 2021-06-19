import pandas as pd
import json

# grabbing correct arrays from csv file
microdf = pd.read_csv('/Users/catherineparnell/envs-final/src/data/microplastics-in-ocean.csv')
macrodf = pd.read_csv('/Users/catherineparnell/envs-final/src/data/macroplastics-in-ocean.csv')

micro_by_2050 = microdf.query("Entity=='Emissions growth to 2050'")['amount']
macro_by_2050 = macrodf.query("Entity=='Emissions growth to 2050'")['amount']

micro_level_by_2020 = microdf.query("Entity=='Emissions level to 2020'")['amount']
macro_level_by_2020 = macrodf.query("Entity=='Emissions level to 2020'")['amount']

micro_stop_by_2020 = microdf.query("Entity=='Emissions stop in 2020'")['amount']
macro_stop_by_2020 = macrodf.query("Entity=='Emissions stop in 2020'")['amount']

years = microdf.query("Entity=='Emissions level to 2020'")['Year']

data_names = ['micro_by_2050', 'macro_by_2050', 'micro_level_by_2020', 'macro_level_by_2020', 'macro_stop_by_2020', 'micro_stop_by_2020', 'years']
data_arrays = [micro_by_2050, macro_by_2050, micro_level_by_2020, macro_level_by_2020, macro_stop_by_2020, micro_stop_by_2020, years]

# creating dictionary
future_plastic_data = {}
for i in range(len(data_names)):
    future_plastic_data[data_names[i]] = list(data_arrays[i])

# outputting json
with open('future-plastic-data.json', 'w') as outfile:
    json.dump(future_plastic_data, outfile)
