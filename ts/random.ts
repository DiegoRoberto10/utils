import { randomUUID } from 'crypto';

const randomUniqueID = (withDash: boolean = false): string => {
  if (!withDash) return randomUUID().replace(/-/g, '');
  return randomUUID();
};

const randomInteger = (length: number): string => {
  let randomNumber: string = '';

  for (let i = 0; i < length; i++) {
    const digit: number = Math.floor(Math.random() * 10);
    randomNumber += digit === 0 ? '1' : digit.toString();
  }

  return randomNumber;
}

console.info('UUID1:', randomUniqueID());
console.info('UUID2:', randomUniqueID(true));
console.info('INTEGER:', randomInteger(300));
