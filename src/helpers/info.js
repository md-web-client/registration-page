export const print = (object) => {
  const { email, firstName, lastName, telephoneNumber, password, businessAddress, npiNumber } = object

  console.log(
    'length: ',  "\n\n",
    'email:', email, "\n\n", 'firstName:', firstName, "\n\n", 'lastName:', lastName,"\n\n",
    'telephoneNumber:', telephoneNumber, "\n\n", 'password:', password, "\n\n",
    'businessAddress:', businessAddress, "\n\n", 'npiNumber:', npiNumber
  )
};
