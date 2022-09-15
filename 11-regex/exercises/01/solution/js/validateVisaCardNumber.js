// 1. Írj egy függvényt `validateVisaCardNumber` néven,
// ami paraméterként egy visa kártyaszámot vár stringként, szóközök nélkül!
// A függvény egy `Boolean` értékben visszaadja,
// hogy a paraméterként megadott kártyaszám megfelelő formátumú e, vagy sem.

const validateVisaCardNumber = (visa = "") => {
  const pattern = /^4(\d{12}|\d{15})$/;
  return pattern.test(visa);
};

export default validateVisaCardNumber;
