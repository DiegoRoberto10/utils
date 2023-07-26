const base64Encode = (data: any): any => Buffer.from(JSON.stringify(data)).toString('base64');
const base64Decode = (hash: string): any => JSON.parse(Buffer.from(hash, 'base64').toString('utf-8'));

const hash = base64Encode({ name: 'Diego Roberto' });
console.info(hash);
console.info(base64Decode(hash));
