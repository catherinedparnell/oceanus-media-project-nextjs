import pandas as pd
import json

# grabbing correct arrays from csv file
df = pd.read_csv('/Users/catherineparnell/envs-final/src/data/raw/plastic-waste-per-capita.csv')

# top 20 countries
top_20 = df.sort_values('amount',ascending = False).head(20) # top 20

# global powers
united_states = df.loc[df['Entity'] == 'United States']
united_kingdom = df.loc[df['Entity'] == 'United Kingdom']
brazil= df.loc[df['Entity'] == 'Brazil']
china = df.loc[df['Entity'] == 'China']
canada = df.loc[df['Entity'] == 'Canada']
india = df.loc[df['Entity'] == 'India']

countries = [united_kingdom, united_states, brazil, china, canada, india]

selected_countries = pd.concat(countries)

# make into dictionary for export
data = {}

data['countries'] = list(selected_countries['Entity'])
data['amount'] = list(selected_countries['amount'])

with open('plastic-per-person.json', 'w') as outfile:
    json.dump(data, outfile)