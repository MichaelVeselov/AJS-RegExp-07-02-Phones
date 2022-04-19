export default function phoneNumberMatcher(phoneNumber) {
  const regExp = /\d/g;
  const matchedPhoneNumber = phoneNumber.replace(/^8/, '7').match(regExp).join('');
  return `+${matchedPhoneNumber}`;
}
