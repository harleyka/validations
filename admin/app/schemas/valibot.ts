import {
  object,
  string,
  minLength,
  email,
  regex,
  number,
  minValue,
  maxValue,
  boolean,
  pipe,
  check,
  forward,
  partialCheck,
  InferInput,
} from 'valibot'

export const valibotSchema = pipe(
  object({
    name: pipe(
      string('Jméno musí být text.'), // Zpráva pro typovou chybu
      minLength(1, 'Jméno je povinné.'), // Ekvivalent nonempty
      minLength(3, 'Minimálně 3 znaky.'),
      // Valibot používá `check` pro vlastní validace.
      // Zod refine se překládá na Valibot check.
      check((val) => val !== 'Jan Novák', 'To si vymýšlíte.'),
    ),
    // Valibot má regex přímo v pipe, minLength je pro kontrolu neprázdnosti
    // username: pipe(
    //   string('Uživatelské jméno musí být text.'),
    //   minLength(1, 'Uživatelské jméno je povinné.'),
    //   regex(/^[a-z][a-z0-9]{4,11}$/, 'Uživatelské jméno musí mít 5–12 znaků, začínat písmenem a obsahovat jen malá písmena a čísla.'),
    // ),
    email: pipe(string('E-mail musí být text.'), minLength(1, 'E-mail je povinný.'), email('Neplatný e-mail.')),
    // URL: V Valibotu je `url` validátor. minLength(1) pro povinnost
    // url: pipe(
    //   string('URL musí být text.'),
    //   minLength(1, 'URL je povinná.'),
    //   url('Neplatná URL.'),
    // ),
    password: pipe(
      string('Heslo musí být text.'),
      minLength(1, 'Heslo je povinné.'),
      minLength(8, 'Minimálně 8 znaků.'),
      regex(/\d/, 'Musí obsahovat číslo.'),
    ),
    confirmPassword: pipe(string('Potvrzení hesla musí být text.'), minLength(1, 'Potvrďte heslo.')),
    age: pipe(
      // Pro čísla se často používá `coerce(number())` pro převod z řetězce (např. z inputu)
      number('Věk je povinný.'), // Zpráva pro typovou chybu, pokud vstup není číslo
      minValue(18, 'Musí být alespoň 18 let.'),
      maxValue(99, 'Na tohle jste už starý.'),
    ),
    terms: pipe(
      boolean('Musíte souhlasit s podmínkami.'), // Zpráva pro typovou chybu
      // Pro boolean true se často používá `check` nebo jednoduše `boolean()` s `validate` v kontextu formuláře
      // Pokud chcete explicitně vyžadovat true:
      check((val) => val === true, 'Musíte souhlasit s podmínkami.'),
    ),
  }),
  forward(
    partialCheck(
      [['password'], ['confirmPassword']],
      (input) => input.password === input.confirmPassword,
      'Hesla se neshodují.',
    ),
    ['confirmPassword'],
  ),
)

export type FormData = InferInput<typeof valibotSchema>
