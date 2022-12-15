/* tslint:disable:no-unused-expression no-empty */
import { Verifier } from '@pact-foundation/pact';
import path = require('path');
import { startHTTPServer } from '../provider';

describe('Plugins', () => {
  const HOST = '127.0.0.1';

  describe('Verification', () => {
    describe('with FooBar protocol', () => {
      const HTTP_PORT = 8888;

      beforeEach(async () => {
        await startHTTPServer(HOST, HTTP_PORT);
      });

      it('validates HTTP FooBar messages', async () => {
        const v = new Verifier({
          providerBaseUrl: `http://${HOST}:${HTTP_PORT}`,
          pactUrls: [
            path.join(__dirname, '../', 'pacts', 'myconsumer-myprovider.json'),
          ],
        });

        return v.verifyProvider();
      });
    });
  });
});
