'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Mao Zedong', phone: '+380554442211' },
  { name: 'Vlad Lenin', phone: '+380554441905' },
  { name: 'German Guy', phone: '+380554441939' },
];

const findPhoneByName = (name) => {
  for (const el of phonebook) {
    if (el.name === name) return el.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
