import express from 'express';
const service = express();

const port = 8080;

service.get('/', (req, res) => {
  res.send('Hello World!');
});

service.listen(
  port,
  // tslint:disable-next-line:no-console
  () => { console.log(`Server listening @ http://localhost:${port}`); }// tslint-disable-line
);
