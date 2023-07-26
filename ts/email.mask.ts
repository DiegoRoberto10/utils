const emailMask = (email: string): string => {
  const firstParts = email.split('@');
  const identification = firstParts[0].replace(firstParts[0].substring(3), '****');
  const secondParts = firstParts[1].split('.');
  const host = secondParts[0].replace(secondParts[0].substring(1), '****');
  return `${identification}@${host}.${secondParts[1]}`;
};

const maskedEmail = emailMask('diego@email.com');

console.log(maskedEmail);
