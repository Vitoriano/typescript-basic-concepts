// type alias
type Uid = number | string

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}. `)
}


function logInfo(uid: Uid, user: string) {
  console.log(`A product with ${uid} has a name as ${user}. `)
}


type Plataform = 'Windows' | 'Linux' | 'MacOs'

function renderPlaform(plataform: Plataform) {
  return plataform
}


logDetails(123, 'Details')
logDetails("123", 'Details')

logDetails(123, 'Jhon Joe')
logDetails("123", 'Jhon Joe')