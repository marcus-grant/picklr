import axios, { AxiosResponse } from 'axios';
import cheerio from 'cheerio';

import fs from 'fs';

const testfilepath = 'examples/med.txt';

const writeToFile = (contents: string) => {
  fs.writeFile(testfilepath, contents, (err) => {
    if (err) {
      throw err;
    }
    console.log('Saved to file');
    console.log(contents);
  });
};

const getAllPText = (res: AxiosResponse): string => {
  const pText: string[] = [];
  const $ = cheerio.load(res.data);
  $('div.body p').each((i, e) => {
    pText.push($(e).text());
  });
  return pText.reduce((acc: string, currentText: string) => {
    return acc + currentText  + '\n\n';
  });
};

const url = 'https://dev.to/aurelkurtula/introduction-to-web-scraping-with-nodejs-9h2';

axios.get(url)
  .then((res) => {
    // console.log(res.data);
    writeToFile(getAllPText(res));
  })
  .catch((err) => {
    console.log(err);
  });
