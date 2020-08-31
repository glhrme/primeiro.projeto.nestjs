import { hash, compare } from 'bcrypt'

export default class AuthUtils {
  static async hashPassword(password: string) {
    return await hash(password, 5)
  }

  static async comparePassword(password: string, encrypted: string) {
    return await compare(password, encrypted)
  }
}