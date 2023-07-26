type AccountNumber = {
  number: string,
  digit: string
}

const separateAccount = (account: string): AccountNumber => {
  return { 
    number: account.substring(0, account.length - 1), 
    digit: account.substring(account.length - 1, account.length)
  };
}

console.log(separateAccount('0000000023'));
