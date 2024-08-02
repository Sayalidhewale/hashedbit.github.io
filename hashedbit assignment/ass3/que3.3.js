let string = 'INDIA';

let chars = string.split('');

chars.splice(3, 0, 'ONESIA');

let modifiedString = chars.join('');

console.log(modifiedString);