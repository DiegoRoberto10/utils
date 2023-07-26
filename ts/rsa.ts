import { generateKeyPairSync, publicEncrypt, publicDecrypt, privateEncrypt, privateDecrypt, KeyPairSyncResult } from 'crypto';

const generateRSAKeys = () => {
  const keys: KeyPairSyncResult<string, string> = generateKeyPairSync('rsa', {
    modulusLength: 520,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
  });

  return {
    base64PrivateKey: Buffer.from(keys.privateKey).toString('base64'),
    base64PublicKey: Buffer.from(keys.publicKey).toString('base64')
  }
}

const encryptWithPublicKey = (base64PublicKey: string, data: any): string => {
  const publicKey: string = Buffer.from(base64PublicKey, 'base64').toString('utf-8');
  return publicEncrypt(publicKey, Buffer.from(data)).toString('base64');
}

const decryptWithPrivateKey = (base64PrivateKey: string, dataHash: string): any => {
  const privateKey: string = Buffer.from(base64PrivateKey, 'base64').toString('utf-8');
  return privateDecrypt(privateKey, Buffer.from(dataHash, 'base64')).toString('utf-8');
}

const encryptWithPrivateKey = (base64PrivateKey: string, data: any): string => {
  const privateKey: string = Buffer.from(base64PrivateKey, 'base64').toString('utf-8');
  return privateEncrypt(privateKey, Buffer.from(data)).toString('base64');
}

const decryptWithPublicKey = (base64PublicKey: string, dataHash: string): any => {
  const publicKey: string = Buffer.from(base64PublicKey, 'base64').toString('utf-8');
  return publicDecrypt(publicKey, Buffer.from(dataHash, 'base64')).toString('utf-8');
}

const { base64PrivateKey, base64PublicKey } = generateRSAKeys();

// // PUBLIC KEY
// console.info('\nPUBLIC-KEY-BASE64:\n', base64PublicKey);
// console.info('\nPUBLIC-KEY:\n', Buffer.from(base64PublicKey, 'base64').toString('utf-8'));

// // PRIVATE KEY
// console.info('PRIVATE-KEY-BASE64:\n', base64PrivateKey);
// console.info('\nPRIVATE-KEY:\n', Buffer.from(base64PrivateKey, 'base64').toString('utf-8'));

/** --------------------- */

// // CONTENT
// const content: string = '0123456789.0123456789.0'; // maximum supports 23 bytes = 184 bites
// console.info('CONTENT MAX LENGTH 23: ', content);

// // ENCRYPT PUBLIC
// const encryptPublic = encryptWithPublicKey(base64PublicKey, content);
// console.info('HASH-ENCRYPT-PUBLIC: ', encryptPublic);

// // DECRYPT PRIVATE
// const decryptPrivate = decryptWithPrivateKey(base64PrivateKey, encryptPublic);
// console.info('DECRYPT PRIVATE: ', decryptPrivate);

/** --------------------- */

// // CONTENT LARGE
const contentLarge: string = '0123456789.0123456789.0123456789.0123456789.0123456789'; // maximum supports 54 bytes = 432 bites
console.info('\nCONTENT MAX LENGTH 54: ', JSON.stringify(contentLarge).length);

// ENCRYPT PRIVATE
const encryptPrivate = encryptWithPrivateKey(base64PrivateKey, contentLarge);
console.info('HASH-ENCRYPT-PRIVATE: ', encryptPrivate);

// DECRYPT PUBLIC
const decryptPublic = decryptWithPublicKey(base64PublicKey, encryptPrivate);
console.info('DECRYPT-PUBLIC: ', decryptPublic);
