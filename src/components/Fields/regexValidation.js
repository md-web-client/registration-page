const emailIsValid = (email) => {
  const bool = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  return bool
}

const passwordValidation = (pass) => {
  const bool = new RegExp('^.*(?=.{8,})(?=.*[a-zA-Z0-9])(?=.*[!#$%&?"]).*$').test(pass)
  return bool
}

const nameField = (name) => {
  // first and last name = new RegExp('^[A-Z][a-z]*\\s[A-Z][a-z]*$')
  // const fullNameMessage='Valid Full Name Syntax: "Michael Gregory Dimmitt" or "Michael Dimmitt"'
  const bool = new RegExp('^[A-Z][a-z]{3,30}$').test(name)
  return bool
}

const  businessAddress = (addr) => {
  // new RegExp(BUSINESS ADDRESS:\s*STREET\s1:\s*(.*)\s*STREET\s2:\s*(.*))
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
 const passwordMessage='Password must contain 8 characters and at least one number, one letter and one unique character such as !#$%&?'

module.exports = { emailIsValid, passwordValidation, nameField, telephoneNumber, businessAddress, nameMessage, passwordMessage }
