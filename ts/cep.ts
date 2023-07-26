const validate = (cep: string): boolean => {
  if (cep.length !== 8) return false;

  const digits: string[] = cep.split('');
  for (let i = 0; i < digits.length; i++) {
    if (!Number(digits[i])) return false;
  }

  const multiplicadores = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4];
  let soma = 0;
  for (let i = 0; i < digits.length - 1; i++) {
    soma += Number(digits[i]) * multiplicadores[i];
  }
  let resto = soma % 11;
  if (resto < 2) resto = 0;
  else resto = 11 - resto;

  return digits[7] === resto;
};

console.log(validate("11111-111"));