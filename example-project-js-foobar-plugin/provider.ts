/* tslint:disable:no-unused-expression no-empty */
import express = require('express');
import * as http from 'http';

export const startHTTPServer = (
  host: string,
  port: number
): Promise<http.Server> => {
  const server: express.Express = express();

  server.post('/foobar', (_, res) => {
    res.setHeader('content-type', 'application/foo');
    res.send('world');
  });

  server.on('error', (err) => {
    console.log(`received HTTP error: ${err}. Error will be ignored`);
  });

  let s: http.Server;
  return new Promise<void>((resolve) => {
    s = server.listen(port, host, () => {
      resolve();
    });
  }).then(() => s);
};
