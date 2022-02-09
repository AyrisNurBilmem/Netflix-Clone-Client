export default function validateInfo(values) {
  let errors = {};

  if (!values.email.trim()) {
    errors.email = "Email is required!";
  }
  if (
    !(values.password.length > 4 && values.password.length < 60) ||
    values.password === ""
  ) {
    errors.password = "Password is required!";
  }
  return errors;
}
