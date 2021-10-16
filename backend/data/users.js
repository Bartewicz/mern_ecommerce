import password from 'generate-password'

function generatePassword() {
  return password.generate({
    numbers: true,
    symbols: '!@#$&=',
    strict: true,
  })
}

export const users = [
  {
    name: { firstName: 'Bartosz', lastName: 'Wojtalewicz' },
    email: 'bartewicz@pm.me',
    password: generatePassword(),
    role: 'admin',
    username: 'bartewicz',
  },
  {
    name: {
      firstName: 'Clark',
      lastName: 'Kent',
    },
    email: 'clark@super.man',
    password: generatePassword(),
    role: 'customer',
    username: 'superman',
  },
  {
    name: {
      firstName: 'Bruce',
      lastName: 'Wayne',
    },
    email: 'bruce@bat.man',
    password: generatePassword(),
    role: 'customer',
    username: 'darkknight',
  },
]
