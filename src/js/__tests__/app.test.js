import phoneNumberMatcher from '../app.js';

const phoneNumbers = [
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
];

const handler = test.each(phoneNumbers);

handler('should show matched phone number for %s', (phoneNumber, expected) => {
  const response = phoneNumberMatcher(phoneNumber);
  expect(response).toBe(expected);
});
