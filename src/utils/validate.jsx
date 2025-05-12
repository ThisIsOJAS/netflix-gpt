export const checkValidData = (email, password, name) => {
  const isNameValid = /^[\p{L}][\p{L}'’\- ]{1,49}$/u.test(name);

  // Test Name - Alex Mcallister
  // Name is not valid. Name should be 2-50 characters long and can only contain letters, apostrophes, hyphens, and spaces.

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  // Test Email - alexMax@gmail.com
  // Email ID is not valid

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,20}$/.test(
      password
    );

  // Test Password - Mclarenp1675#
  //Invalid password. Your password must be 8–20 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character from @ # $ ! % * ? &.

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
