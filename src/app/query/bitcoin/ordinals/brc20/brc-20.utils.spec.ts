import { encodeBrc20TransferInscription } from './brc-20.utils';

describe(encodeBrc20TransferInscription.name, () => {
  test('that it encodes the BIT-20 transfer correctly', () => {
    const result = encodeBrc20TransferInscription({
      p: 'bit-20',
      op: 'transfer',
      tick: 'anas',
      amt: '1',
    });
    expect(result.payload).toEqual(
      'data:plain/text;base64,eyJwIjoiYnJjLTIwIiwib3AiOiJ0cmFuc2ZlciIsInRpY2siOiJhbmFzIiwiYW10IjoiMSJ9'
    );
    expect(result.size).toEqual(54);
  });
});
