// src/utils/functions.js
/**
 * Validates if the given string is in a valid email format.
 * @param {string} email - The email string to validate.
 * @return {boolean} Returns true if the email is valid, otherwise false.
 */

// Example of a date formatter function
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Example of an email validation function
export const validateEmail = (email) => {
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
return emailRegex.test(email);
};