type keysTypes = {
  old: string;
  new: string;
}

const changeObjectKeys = (object: any, keys: keysTypes[]): any => {
  for (const key of keys) {
    if (!object[key.old]) continue;
    object[key.new] = object[key.old];
    delete object[key.old];
  };
  return object;
};


const myObject = { 
  _id: 'value1', 
  full_name: 'value2',
  document_number: 'value3'
};
console.info('Old object:', myObject);

const otherObject = changeObjectKeys(
  myObject, 
  [
    { old: '_id', new: 'id' },
    { old: 'full_name', new: 'name' },
    { old: 'document_number', new: 'document' }
  ]
);
console.log('New object:', otherObject);
