# UN Climate Initiatives Platform

Simple python-based crawler for pulling data off the UN's [Climate Initiatives Platform](https://climateinitiativesplatform.org/index.php/Welcome).

Consult the excellent *[Orchestrating Global Climate Governance Through Data: The UNFCCC Secretariat and the Global Climate Action Platform](https://direct.mit.edu/glep/article/22/4/151/111237/Orchestrating-Global-Climate-Governance-Through)* by Mai and Elsässer for a detailed discussion on the role of this data platform, and how it relates to the historic [UN NAZCA](https://en.wikipedia.org/wiki/Global_Climate_Action_(portal)) initiative and current [GCAP](https://climateaction.unfccc.int) data sources.

- `aggregate-links.js` includes a single Javascript line for grabbing all the links from the [category listing pages](https://climateinitiativesplatform.org/index.php/Category:Climate_initiative).
- `crawler.py` includes code for accessing, parsing, structuring, and downloading all the data on each initiative page. It's messy, but it works well.

Data accessed on June 11, 2023 is available in the dataset `UNClimateDataInitiatives-20230611.csv`.

