// const correctDate = (date = null) => date ? new Date(date.includes('/') ? date.split('/').reverse().join('-') : date) : new Date(new Date().getTime() - 10800000);

const correctDate = (date?: string): Date => {
  if (!date) return new Date(new Date().getTime() - 10800000);
  return new Date(date.includes('/') ? date.split('/').reverse().join('-') : new Date(date));
};

console.log(correctDate('2000-01-01'));
console.log(correctDate('08/02/1991'));
console.log(correctDate());
