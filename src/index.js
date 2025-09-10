import penaltyPoints from "./passwordPenalty.js";
import isValidPassword from "./passwordValidation.js";

const pass = '1q3w5e7r9T';
const pass2 = '1333w57r9tt';
isValidPassword(pass)
console.log("Password validation: ",pass, " " ,isValidPassword(pass))
console.log("Password     penalty: ",pass2, " " ,penaltyPoints(pass2))