import { NAME_REGEX, NUMBER_REGEX, EMAIL_REGEX } from "../constants";

export const validateFormErrors = (formData) => {
  const errors = {};

  if (!formData.planetName) {
    errors.planetName = "Planet Name is required";
  }
  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(formData.email)) {
    errors.email = "Invalid email format";
  }
  if (!formData.diameter) {
    errors.diameter = 'Please enter a diameter'
  } else if (!NUMBER_REGEX.test(formData.diameter)) {
    errors.diameter = 'Diameter should be a number'
  }
  if (!formData.distance) {
    errors.distance = "Please enter a distance";
  } else if (!NUMBER_REGEX.test(formData.distance)) {
    errors.distance = "Distance should be a number";
  }
  if (!formData.yourName) {
    errors.yourName = "Your Name is required";
  } else if (formData.yourName.length < 3) {
    errors.yourName = "Your Name must be at least 3 characters";
  } 

  if (!formData.selectedOption) {
    errors.selectedOption = "Galaxy Name is required";
  }

  return errors;
};
