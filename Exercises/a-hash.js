'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */


const phonebook = new Map();
phonebook.set('Ivan', '+380 76 344 7452');
phonebook.set('Aurelius', '+380 87 433 9809');
phonebook.set('Mark', '+380 45 344 1408');

const findPhoneByName = (name) => phonebook.get(name);

module.exports = { phonebook, findPhoneByName };
