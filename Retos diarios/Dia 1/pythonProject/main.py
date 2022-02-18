#Libraries
import pandas as pandas

# Variables de archivo
file = "example.xlsx"
sheet = ""
index = ""
column = "email"

dataFile = pandas.read_excel(file)
dataColumn = dataFile[column]

result = pandas.unique(dataColumn)
print(result)