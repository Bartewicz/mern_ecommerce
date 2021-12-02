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
    email: 'bartewicz@pm.me',
    password: generatePassword(),
    role: 'admin',
  },
  {
    email: 'clark@super.man',
    password: generatePassword(),
    role: 'customer',
  },
  {
    email: 'bruce@bat.man',
    password: generatePassword(),
    role: 'customer',
  },
]
