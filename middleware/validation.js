import {
  IsNotANumber,
  LengthIsGreaterThanMaxDigit,
  LengthIsLessThanMinDigit
} from "../helpers/utils";

export const validate = (req, res, next) => {
  const { phoneNumber } = req.body;
  if (IsNotANumber(phoneNumber)) {
    return (res.status(400).json({
      error: {
        message: "Invalid input. Please enter a valid number."
      }
    }));
  }

  if (LengthIsLessThanMinDigit(phoneNumber)) {
    return (res.status(422).json({
      error: {
        message: `Number cannot be less than ${process.env.MIN_DIGITS} digits`
      }
    }));
  }

  if (LengthIsGreaterThanMaxDigit(phoneNumber)) {
    return (res.status(422).json({
      error: {
        message: `Number cannot be greater than ${process.env.MAX_DIGITS} digits`
      }
    }));
  }
  next();
}
