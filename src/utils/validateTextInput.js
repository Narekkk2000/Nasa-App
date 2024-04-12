import { TEXT_REGEX } from "../constants";

export const validateTextInput = (name, value) => {
  if (name === "yourName") {
    if (!TEXT_REGEX.test(value)) {
      return false;
    }
  }
  return true;
};
