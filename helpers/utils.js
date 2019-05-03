export const IsNotANumber = (value) => {
  if (isNaN(value)) {
    return true;
  }
};

export const LengthIsGreaterThanMaxDigit= (value) => {
  if (value.length > process.env.MAX_DIGITS) {
    return true;
  }
};

export const LengthIsLessThanMinDigit = (value) => {
  if (value.length < process.env.MIN_DIGITS) {
    return true;
  }
};
