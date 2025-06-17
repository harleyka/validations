import { create, test, enforce } from 'vest'

export const suite = create((data = {}) => {
  // Jméno
  test('name', 'Jméno je povinné', () => {
    enforce(data.name).isNotBlank()
  })

  test('name', 'Minimálně 3 znaky', () => {
    enforce(data.name).longerThanOrEquals(3)
  })

  test('name', 'To si vymýšlíte', () => {
    enforce(data.name).notEquals('Jan Novák')
  })

  // Username
  test(
    'username',
    'Uživatelské jméno musí mít 5–12 znaků, začínat písmenem a obsahovat jen malá písmena a čísla',
    () => {
      enforce(data.username).matches(/^[a-z][a-z0-9]{4,11}$/)
    },
  )

  // Email
  test('email', 'E-mail je povinný', () => {
    enforce(data.email).isNotBlank()
  })

  test('email', 'Neplatný e-mail', () => {
    enforce(data.email).matches(/^\S+@\S+\.\S+$/)
  })

  // Heslo
  test('password', 'Heslo je povinné', () => {
    enforce(data.password).isNotBlank()
  })

  test('password', 'Minimálně 8 znaků', () => {
    enforce(data.password).longerThanOrEquals(8)
  })

  test('password', 'Musí obsahovat číslo', () => {
    enforce(data.password).matches(/\d/)
  })

  // Potvrzení hesla
  test('confirmPassword', 'Potvrďte heslo', () => {
    enforce(data.confirmPassword).isNotBlank()
  })

  test('confirmPassword', 'Hesla se neshodují', () => {
    enforce(data.confirmPassword).equals(data.password)
  })

  // Věk
  test('age', 'Věk je povinný', () => {
    enforce(data.age).isNotBlank()
  })

  test('age', 'Musí být alespoň 18 let', () => {
    enforce(Number(data.age)).greaterThanOrEquals(18)
  })

  test('age', 'Na tohle jste už starý', () => {
    enforce(Number(data.age)).lessThanOrEquals(99)
  })

  // Podmínky
  test('terms', 'Musíte souhlasit s podmínkami', () => {
    enforce(data.terms).isTruthy()
  })
})
