import { getAllStock, getFruitContainer, getFruitsName } from './solution'

export type IFruit = {
  fruitId: number
  fruitName: string
  fruitType: 'IMPORT' | 'LOCAL'
  stock: number
}

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150,
  },
]

// soal 1
let solution_1: string[] = getFruitsName(fruits)
console.log('soal 1\nbuah yang dimiliki andi : ', solution_1.join(', '))

// soal 2
const solution_2 = getFruitContainer(fruits)
console.log('\nsoal 2\njumlah wadah -> ' + solution_2.length)
solution_2.forEach((data) => {
  console.log(`${data.name} -> ${data.fruits.join(', ')}`)
})
// soal 3
const solution_3 = getAllStock(fruits)
console.log('\nsoal 3')
solution_3.forEach((data) => {
  console.log(`wadah ${data.name} berisi ${data.stock}`)
})
