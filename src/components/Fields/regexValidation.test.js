import {
  emailIsValid, passwordValidation, nameField, telephoneNumber,
  businessAddress, nameMessage, passwordMessage } from './regexValidation'

test('sanity', () => {
  console.log({passwordMessage})
  expect(true).toBe(true)
});

//test('business address', () => {
//
//  const testAddr=`BUSINESS ADDRESS:
//  STREET 1:       107 N PENNSYLVANIA ST
//  STREET 2:       STE 600
//  CITY:           INDIANAPOLIS
//  STATE:          IN
//  ZIP:            46204
//  BUSINESS PHONE:     3172619000
//
//  MAIL ADDRESS:
//  STREET 1:       107 N PENNSYLVANIA ST
//  STREET 2:       STE 600
//  CITY:           INDIANAPOLIS
//  STATE:          IN
//  ZIP:            46204`
//})

test('email field allows correct address', () => {

  expect(emailIsValid('email@address.com'))
    .toBe(true)
});

test('email field denies incorrect address', () => {
  expect(emailIsValid('test@test@emailadress.com'))
    .toBe(false)
});

test('name field allows incorrect name', () => {
  expect(nameField('Michael'))
    .toBe(true)
});

test('name field denies incorrect name', () => {
  expect(nameField('Michael Gregory Dimmitt'))
    .toBe(false)
  expect(nameField('MMchael'))
    .toBe(false)
});

test('telephone field allows correct name', () => {
  ["(123) 456-7890",
  "(123)456-7890",
  "123-456-7890",
  "123.456.7890",
  "1234567890",
  "+31636363634",
  "+3(123) 123-12-12",
  "+3(123)123-12-12",
  "+3(123)1231212",
  "+3(123) 12312123",
  "075-63546725",
  "904-555-5555",
  "555-4444",
  ].map(x => {
    expect(telephoneNumber(x))
      .toBe(true);
    return x;
  })

})
test('telephone field denies incorrect name', () => {
  expect( telephoneNumber("555-444"))
    .toBe(false)
})
