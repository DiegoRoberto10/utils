// Definir códigos de escape ANSI para cores
const reset = "\x1b[0m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const blue = "\x1b[34m";
const bold = "\x1b[1m";

// Exemplo de uso
console.info(`${red}${bold}ERROR: ${reset}`);
console.info(`${blue}${bold}SUCCESS: ${reset}`);