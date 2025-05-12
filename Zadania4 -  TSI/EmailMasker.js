function maskEmail(email) {
  const atIndex = email.indexOf('@');
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (username.length > 2) {
    const firstChar = username[0];
    const lastChar = username[username.length - 1];
    const maskedUsername = firstChar + '*'.repeat(username.length - 2) + lastChar;
    return maskedUsername + domain;
  } else {
    return username + domain;
  }
}

let email = "apple.pie@example.com";
console.log(maskEmail(email)); 
email = "freecodecamp@example.com";
console.log(maskEmail(email));

