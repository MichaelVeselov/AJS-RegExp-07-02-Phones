export default function phoneNumberMatcher(phoneNumber) {
  // phoneNumber = phoneNumber.replace(/^8/, '7');
  const regExp = /\d/g;
  const matchedPhoneNumber = phoneNumber.replace(/^8/, '7').match(regExp).join('');
  return `+${matchedPhoneNumber}`;
}
