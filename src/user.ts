
type AccountInfo = {
  id: number,
  name: string,
  email?: string
}

const account: AccountInfo = {
  id:  123,
  name: 'Vitoriano',
  email: 'meuemail@mail.com.br'
}

type CharInfo = {
  nickname: string,
  level: number
}

const char: CharInfo = {
  nickname: "cj2020",
  level: 100
}

//  intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id:  123,
  name: 'Vitoriano',
  email: 'meuemail@mail.com.br',
  nickname: "cj2020",
  level: 100
}