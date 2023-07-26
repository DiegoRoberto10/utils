const unifyArray = (data: any[]): any[] => [...new Set(data)];

console.log(unifyArray([1, 2, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7]));