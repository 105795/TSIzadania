function generatePassword(yourPasswordLength) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  
  for (let i = 0; i < yourPasswordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
  return password;
}

const password = generatePassword(16);
console.log("Generated password:" + password);


