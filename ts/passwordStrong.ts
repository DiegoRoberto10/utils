const isPasswordStrong = (password: string): boolean => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;
  return !!regex.test(password);
};

console.info(isPasswordStrong('123456'));
console.info(isPasswordStrong('Diego@123'));
