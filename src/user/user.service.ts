import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  private user: Array<any>

  constructor() {
    this.user = [
      {
        name: 'Guilherme',
        email: 'guilherme@guisantos.com.br'
      },
      {
        name: 'Guilherme',
        email: 'guilherme2@guisantos.com.br'
      }
    ]
  }

  getUser(email: string): string {
    const filteredUser = this.user.filter((userUnit: any): string => {
      if (userUnit.email === email) {
        return userUnit
      }
    })
    if(filteredUser.length > 0) {
      return filteredUser[0].name
    } else {
      return  null
    }
  }
}
