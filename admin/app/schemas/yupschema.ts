import * as yup from 'yup'

export const yupschema = yup.object({
  name: yup.string().required('Jméno je povinné').min(3, 'Minimálně 3 znaky').not(['Jan Novák'], 'To si vymýšlíte'),
  username: yup
    .string()
    .matches(
      /^[a-z][a-z0-9]{4,11}$/,
      'Uživatelské jméno musí mít 5–12 znaků, začínat písmenem a obsahovat jen malá písmena a čísla',
    ),
  email: yup.string().email('Neplatný e-mail').required('E-mail je povinný'),
  password: yup.string().required('Heslo je povinné').min(8, 'Minimálně 8 znaků').matches(/\d/, 'Musí obsahovat číslo'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Hesla se neshodují')
    .required('Potvrďte heslo'),
  age: yup.number().required('Věk je povinný').min(18, 'Musí být alespoň 18 let').max(99, 'Na tohle jste už starý'),
  terms: yup.boolean().oneOf([true], 'Musíte souhlasit s podmínkami'),
})
