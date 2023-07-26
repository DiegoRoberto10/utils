import { Cipher, Decipher, createCipheriv, createDecipheriv } from 'crypto';

const credentials = {
  key: '1d54der8gf56tnjk35o4kj97qald93gb', // 32 bytes = 256 bits
  iv: '1f45t4f78tg4598i' // 16 bytes = 128 bits
};

const encryptAES = (data: any, key: string, iv: string): string => {
  const cipher: Cipher = createCipheriv('aes-256-cbc', key, iv);
  let encrypted: string = cipher.update(JSON.stringify(data), 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

const decryptAES = (encryptedData: string, key: string, iv: string): any => {
  const decipher: Decipher = createDecipheriv('aes-256-cbc', key, iv);
  let decrypted: string = decipher.update(encryptedData, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return JSON.parse(decrypted);
}

const content = { name: 'Diego Roberto' };
const enc: string = encryptAES(content, credentials.key, credentials.iv);
console.info('ENC: ', enc);

const dec: any = decryptAES(enc, credentials.key, credentials.iv);
console.info('DEC: ', dec);