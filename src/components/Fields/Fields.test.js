import { validation, failureMessage } from './regexValidation'
import { defaultFields, errorIndicators } from './Fields'

const evaluate = (object) => {
  const
    { firstName,    lastName,   npiNumber,   telephoneNumber,   businessAddress,   email,   password } = object

  const expectedKeys =
    [ 'firstName', 'lastName', 'npiNumber', 'telephoneNumber', 'businessAddress', 'email', 'password' ]

  const objectKeys = Object.keys(object);
  const numKeys    = objectKeys.length;
  expect(numKeys)
    .toBe(7)
  expect(objectKeys)
    .toStrictEqual(expectedKeys)
};

describe(`
  fields are recycled,
  checking presence of common fields:
  email, firstName, lastName, telephoneNumber, password, businessAddress, npiNumber

`, function(){

  test('check default fields arrive with correct keynames', () => {
    evaluate( defaultFields );
  });
  test('check error indicators arrive with correct keynames', () => {
    evaluate( errorIndicators );
  });
  test('check validation functions arrive with correct keynames', () => {
    evaluate( validation );
  });
  test('check failure messages arrive with correct keynames', () => {
    evaluate( failureMessage );
  });
});

const print = (object) => {
  const { email, firstName, lastName, telephoneNumber, password, businessAddress, npiNumber } = object

  console.log(
    'length: ',  "\n\n",
    'email:', email, "\n\n", 'firstName:', firstName, "\n\n", 'lastName:', lastName,"\n\n",
    'telephoneNumber:', telephoneNumber, "\n\n", 'password:', password, "\n\n",
    'businessAddress:', businessAddress, "\n\n", 'npiNumber:', npiNumber
  )
};

