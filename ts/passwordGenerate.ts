import { hashSync, compareSync } from 'bcryptjs';

const generateHash = (text: string): string => {
  return hashSync(text, 5);
};

const compareHash = (text: string, hash: string): boolean => {
  return compareSync(text, hash);
}

const password = '720065';
const hash: string = generateHash(password);

console.info(hash);
console.info(compareHash(password, hash))
