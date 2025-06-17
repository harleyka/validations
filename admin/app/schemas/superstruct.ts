import { object, string, number, boolean, refine, pattern } from 'superstruct'

const notValue = (forbidden: string[], msg: string) =>
  refine(string(), 'notValue', (value) => (!forbidden.includes(value) ? true : msg))

const passwordWithNumber = refine(string(), 'passWithNumber', (value) =>
  /\d/.test(value) ? true : 'Musí obsahovat číslo',
)

const usernamePattern = pattern(string(), /^[a-z][a-z0-9]{4,11}$/)

const mustBeTrue = refine(boolean(), 'mustBeTrue', (value) => (value ? true : 'Musíte souhlasit s podmínkami'))

const isRequired = refine(number(), 'numberIsRequired', (value) => !!value || 'Věk je povinný.')

export const superstructSchema = object({
  name: refine(notValue(['Jan Novák'], 'To si vymýšlíte'), 'notNovak', (value) =>
    value.length >= 3 ? true : 'Minimálně 3 znaky',
  ),
  username: usernamePattern,
  email: refine(string(), 'isEmail', (value) => (/^\S+@\S+\.\S+$/.test(value) ? true : 'Neplatný e-mail')),
  password: refine(passwordWithNumber, 'min8char', (value) => (value.length >= 8 ? true : 'Minimálně 8 znaků')),
  confirmPassword: string(), // validace na shodu se dělá mimo schéma
  age: refine(isRequired, 'numberBetween', (value) => (value >= 18 && value <= 99 ? true : 'Musí být mezi 18–99 let')),
  terms: mustBeTrue,
})
