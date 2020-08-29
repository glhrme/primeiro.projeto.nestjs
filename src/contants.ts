export const MIN_LENGTH = {
  PW: 8,
  NAME: 5
}

export const ERRORS_VALIDATION = {
  STRING: 'Este campo não é uma String',
  PW_LENGTH: `Tamanho de senha inválido, o mínimo de caracteres são: ${MIN_LENGTH.PW}`,
  NAME: `Tamanho de nome inválido, o mínimo de caractres são: ${MIN_LENGTH.NAME}`,
  EMAIL: 'E-mail inválido'
}