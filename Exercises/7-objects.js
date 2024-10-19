'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const cObject = { name: 'Ivan' };
  let vObject = { name: 'Nazar' };

  cObject.name = 'Sirko';
  // cObject = { name: 'Alex' };
  // не працює позаяк cObject є константою яку не можна перезаписувати.
  vObject = { name: 'Ivan' };
  vObject.name = 'Ivan';
};

module.exports = { fn };
