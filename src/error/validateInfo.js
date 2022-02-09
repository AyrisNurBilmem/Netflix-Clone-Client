export default function validateInfo(values) {
  let errors = {};

  if (!values.email.trim()) {
    errors.email = "Please enter a valid email or phone number.";
  }
  if (
    !(values.password.length > 4 && values.password.length < 60) ||
    values.password === ""
  ) {
    errors.password = "Your password must contain between 4 and 60 characters.";
  }
  return errors;
}
