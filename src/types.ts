// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: number[]
items = [1,2,3]

let values : Array<number>
values = [1,2,3,4,5]

// tuple 
let title: [number, string]
title = [1, 'Matrix']

// enum 
enum Colors {
  white = '#fff',
  black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any
coisa = true

// void (vazio)

function logger(): void{
  console.log('log')
}

// null / undefined
type Bla = string | undefined

// never
function error(): never {
  throw new Error("error")
}

// object 
let cart: object
cart = { key: "fi" }

/* Type Inference */

let message2 = "mensagem definida"
