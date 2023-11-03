import { comments, fruits } from './data'
import {
  countAllComments,
  getAllStock,
  getFruitContainer,
  getFruitsName,
} from './solution'

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

// case 2
const solution_4 = countAllComments(comments)
console.log(`\nsoal 4\njumlah komentar ada ${solution_4}`)
