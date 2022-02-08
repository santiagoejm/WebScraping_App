# CoinMarketCap Scraper

Hello World!! This project, scrapes information from [www.coinmarketcap.com](https://coinmarketcap.com/) and generate a txt file with the same, more specifically, it gets the **_top 100 market cap crytocurrencies_** by _name, symbol and amount in $ of its market value_. It's functionality is developed with plain **Vanilla JavaScript**, using _arrow functions_ to control its functionality and with the help of Node.js library **"Puppeteer**" for the interaction with the web site. As well, the use of the **"File System Module"** to generate the txt file with the scraped infromation.

## Current Functionality

- Print in a txt file called _top100rypto_ the Name, Symbol and Market Cap Value of the 100 biggest crypto currencies of the world, according to [www.coinmarketcap.com](https://coinmarketcap.com/).

## Future Functionality to Implement

- Get more relevant information about the biggest crypto currencies of the site (volume, price per token, global circulating supply...).
- Create a UI to not just only generate a file with the information, but to also display it in a Browser.

## Challenges Faced during the development

The Main challenge, was to find the solution to scroll down the page through the Puppeteer library, so the content of the page were fully charged and that way have access to the top 100 cryptos displayed in the landing page.

## Usage

1.  `clone`the repository.

2.  install the dependencies: `npm i`

3.  `run` the programm in the project directory: `npm start`

4.  the file will be generated after a couple of seconds.
