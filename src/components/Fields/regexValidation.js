const emailIsValid = (email) => {
  const bool = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  return bool
}

const passwordValidation = (pass) => {
  const bool = new RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!#$%&?"])[a-zA-Z0-9!#$%&?"]{8,16}$').test(pass)
  return bool
}

const nameField = (name) => {
  // first and last name = new RegExp('^[A-Z][a-z]*\\s[A-Z][a-z]*$')
  // const fullNameMessage='Valid Full Name Syntax: "Michael Gregory Dimmitt" or "Michael Dimmitt"'
  const bool = new RegExp('^[A-Z][a-z]{3,30}$').test(name)
  return bool
}

const  businessAddress = (addr) => {
  return new RegExp('BUSINESS ADDRESS:\s*STREET\s1:\s*(.*)\s*STREET\s2:\s*(.*)')
}

function telephoneNumber(numberStr){
  const justNumbers = numberStr.replace( /[\D]+/g, '')
  const bool = new RegExp('[0-9]{7,10}$').test(justNumbers)
  return bool
}
// function npiNumber(){
//
// }

 const nameMessage='Valid name must start with a capital letter and be within the range of 3 to 30 characters.'
 const passwordMessage='Password must be between 8 and 24 characters and at least one number, one letter and one unique character such as !#$%&?'
 const telephoneMessage='Valid phone numbers must contain 7 to 10 numbers.'
 const emailMessage='Incorrect email. Correct format example@domain.com.'
module.exports = {
  validation: {
    firstName: nameField,
    lastName: nameField,
    npiNumber: '',
    telephoneNumber: telephoneNumber,
    businessAddress: businessAddress,
    email: emailIsValid,
    password: passwordValidation
  },
  failureMessage: {
    firstName: nameMessage,
    lastName: nameMessage,
    npiNumber: '',
    telephoneNumber: telephoneMessage,
    businessAddress: '',
    email: emailMessage,
    password: passwordMessage,
  }
}


