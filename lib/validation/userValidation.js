const yup = require("yup");

async function validateSignup(data) {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .min(10)
      .max(45)
      .required("Full name is required")
      .label("Full name"),
    OGSBno: yup
      .string()
      .min(10)
      .max(10)
      .required("OGSB number is required")
      .label("OGSB number"),
    address: yup
      .string()
      .min(15)
      .required("Address is required")
      .label("Address"),
    localGovernment: yup
      .string()
      .required("Local government is required")
      .label("Local government"),
    email: yup
      .string()
      .email("Provide a valid email")
      .required("Email is required")
      .label("Email"),
    password: yup
      .string()
      .min(8)
      .max(20)
      .required("Password is required")
      .label("password"),
    phone: yup
      .string()
      .min(11)
      .max(15)
      .required("Phone number is required")
      .label("Phone number"),
    dateOfBirth: yup
      .date()
      .max(new Date(), "Date cannot be in the future")
      .typeError("Invalid date format"),
    board_department: yup
      .string()
      .required("Board or Department is required")
      .label("Board or Department"),
  });
  try {
    const validateData = await schema.validate(data);
    return null;
  } catch (error) {
    return error?.errors[0];
  }
}

module.exports = { validateSignup };
