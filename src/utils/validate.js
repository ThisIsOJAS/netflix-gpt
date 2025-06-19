export const checkValidData = (name, email, password) => {
  // const isNameValid = /^[A-Z][a-zA-Z’' -]*( [A-Z][a-zA-Z’' -]*)*$/.test(name);  // original approach but it will fail since name is not available on sign in form, throwing "undefined - Name not valid"

  if (name !== null && name !== undefined) {
    const isNameValid = /^[A-Z][a-zA-Z’' -]*( [A-Z][a-zA-Z’' -]*)*$/.test(name);
    if (!isNameValid) {
      return "Name is not valid.";
    }
  }

  // Name is not valid. Name should be 2-50 characters long and can only contain letters, apostrophes, hyphens, and spaces.

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  // Email ID is not valid

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,20}$/.test(
      password
    );
  //Invalid password. Your password must be 8–20 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character from @ # $ ! % * ? &.

  // if (!isNameValid) return "Name is not valid"; condition written above
  if (!isPasswordValid) return "Password is not valid";
  if (!isEmailValid) return "Email ID is not valid";

  return null;
};

// User 1

// Raju Boi
// rajuboi@gmail.com
// Rajuboi123#1

// User 2

// Alex Max
// alexmax@gmail.com
// Alexmax123#1

// User 3

// Ojas Gupta
// netflix@ojas.com
// Netflixojas123#1

// User 4

// Tom Cruise
// tomcruise@gmail.com
// Tomcruise123#1
