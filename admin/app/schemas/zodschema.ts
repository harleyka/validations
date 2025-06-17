import { z } from 'zod/v4'

export const zodSchema = z
  .object({
    name: z
      .string()
      .nonempty('Jméno je povinné')
      .min(3, 'Minimálně 3 znaky')
      .refine((val) => val !== 'Jan Novák', 'To si vymýšlíte'),
    // username: z
    //   .string()
    //   .nonempty('Uživatelské jméno je povinné')
    //   .regex(/^[a-z][a-z0-9]{4,11}$/, {
    //     message: 'Uživatelské jméno musí mít 5–12 znaků, začínat písmenem a obsahovat jen malá písmena a čísla',
    //   }),
    email: z.email('Neplatný e-mail').nonempty('E-mail je povinný'),
    //url: z.url('Neplatná URL').nonempty('URL je povinná'),
    password: z.string().nonempty('Heslo je povinné').min(8, 'Minimálně 8 znaků').regex(/\d/, 'Musí obsahovat číslo'),
    confirmPassword: z.string().nonempty('Potvrďte heslo'),
    age: z
      .number({
        error: 'Věk je povinný.',
      })
      .min(18, 'Musí být alespoň 18 let')
      .max(99, 'Na tohle jste už starý'),
    terms: z.boolean().refine((val) => val, 'Musíte souhlasit s podmínkami'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Hesla se neshodují',
    path: ['confirmPassword'],
  })

export type FormData = z.infer<typeof zodSchema>
