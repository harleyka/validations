export const formkitFormSchema = [
  {
    $formkit: 'text', // Typ pole
    name: 'name',
    label: 'Jméno *',
    validation: 'required|length:3|noJanNovak', // FormKit pravidla
    'validation-messages': {
      required: 'Jméno je povinné.',
      length: 'Minimálně 3 znaky.',
      noJanNovak: 'To si vymýšlíte!',
    },
  },
  {
    $formkit: 'text',
    name: 'email',
    label: 'E-mail *',
    validation: 'required|email',
    'validation-messages': {
      required: 'E-mail je povinný.',
      email: 'Neplatný e-mail.',
    },
    type: 'email', // Specifický typ pro HTML input
  },
  {
    $formkit: 'password', // Speciální typ pro hesla
    name: 'password',
    label: 'Heslo *',
    validation: 'required|length:8|matches:/\\d/', // Regex pro číslo
    'validation-messages': {
      required: 'Heslo je povinné.',
      length: 'Minimálně 8 znaků.',
      matches: 'Musí obsahovat číslo.',
    },
  },
  {
    $formkit: 'password',
    name: 'confirmPassword',
    label: 'Potvrďte heslo *',
    validation: 'required|confirm', // 'confirm' je speciální pravidlo FormKitu
    'validation-messages': {
      required: 'Potvrďte heslo.',
      confirm: 'Hesla se neshodují.',
    },
  },
  {
    $formkit: 'number', // Typ pro číslo
    name: 'age',
    label: 'Věk *',
    validation: 'required|min:18|max:99',
    'validation-messages': {
      required: 'Věk je povinný.',
      min: 'Musí být alespoň 18 let.',
      max: 'Na tohle jste už starý.',
    },
  },
  {
    $formkit: 'checkbox',
    name: 'terms',
    label: 'Souhlasím s podmínkami *',
    validation: 'accepted', // Pravidlo 'accepted' vyžaduje, aby byla hodnota true
    'validation-messages': {
      accepted: 'Musíte souhlasit s podmínkami.',
    },
  },
]
