export const isCpfValid = (cpf: number): boolean => {
  const cpfDigitsInArray = Array.from(String(cpf), Number);

  const lastDigit = cpfDigitsInArray.pop();
  const isLastDigitValid = validate(cpfDigitsInArray, lastDigit as number);

  const penultimateDigit = cpfDigitsInArray.pop();
  const isPenultimateDigitValid = validate(
    cpfDigitsInArray,
    penultimateDigit as number
  );

  return isPenultimateDigitValid && isLastDigitValid;
};

const validate = (digitsInArray: number[], numberVerifier: number) => {
  return (cpfValidationSum(digitsInArray) * 10) % 11 === numberVerifier;
};

const cpfValidationSum = (digitsInArray: number[]) => {
  let multiplier = 2;

  return digitsInArray.reverse().reduce((sum, digit) => {
    const parcel = sum + digit * multiplier;
    multiplier++;

    return parcel;
  }, 0);
};
