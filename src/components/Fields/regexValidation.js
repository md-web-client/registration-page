const emailIsValid = (email) => {
  const bool = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  return bool
}

const passwordValidation = (pass) => {
  const bool = new RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!#$%&?"])[a-zA-Z0-9!#$%&?"]{8,16}$').test(pass)
  return bool
}

const nameField = (name) => {
  // current regex implements fisrt name or just last name.
  // here is the regex for both first and last name together = new RegExp('^[A-Z][a-z]*\\s[A-Z][a-z]*$')
  const bool = new RegExp('^[A-Z][a-z]{3,30}$').test(name)
  return bool
}

const  businessAddress = (addr) => {
  // const bool = new RegExp('BUSINESS ADDRESS:\\s*STREET\\s1:\\s*(.*)\\s*STREET\\s2:\\s*(.*)').test(addr)
  return true
}

const telephoneNumber = (numberStr) => {
  const justNumbers = numberStr.replace( /[\D]+/g, '')
  const bool = new RegExp('[0-9]{7,10}$').test(justNumbers)
  return bool
}

const npiNumber = (numberStr) => {
  const justNumbers = numberStr.replace( /[\D]+/g, '')
  const bool = new RegExp('[0-9]{10}$').test(justNumbers)
  return bool;
}

 const nameMessage='Valid name must start with a capital letter and be within the range of 3 to 30 characters.';
 const npiMessage='Npi number contains exactly 10 numbers.';
 const telephoneMessage='Valid phone numbers must contain 7 to 10 numbers.';
 const businessAddressMessage='Business addresses typically: 1213 TIAA Bank Field Dr, Jacksonville, FL 32202';
 const emailMessage='Incorrect email. Correct format example@domain.com.';
 const passwordMessage='Password must be between 8 and 24 characters and at least one number, one letter and one unique character such as !#$%&?';

module.exports = {
  validation: {
    firstName: nameField,
    lastName: nameField,
    npiNumber: npiNumber,
    telephoneNumber: telephoneNumber,
    businessAddress: businessAddress,
    email: emailIsValid,
    password: passwordValidation
  },
  failureMessage: {
    firstName: nameMessage,
    lastName: nameMessage,
    npiNumber: npiMessage,
    telephoneNumber: telephoneMessage,
    businessAddress: businessAddressMessage,
    email: emailMessage,
    password: passwordMessage,
  }
}


