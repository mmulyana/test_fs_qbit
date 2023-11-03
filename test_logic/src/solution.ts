import { IComment, IFruit } from './data'

// solution 1
export function getFruitsName(arr: IFruit[]): string[] {
  let res: string[] = []
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i].fruitName.toLowerCase())) {
      res.push(arr[i].fruitName.toLowerCase())
    }
  }
  return res
}

// solition 2
function divideByType(arr: IFruit[]): string[] {
  const res: string[] = []
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i].fruitType)) {
      res.push(arr[i].fruitType)
    }
  }

  return res
}

export type IFruitContainer = {
  name: string
  fruits: string[]
}[]

export function getFruitContainer(arr: IFruit[]): IFruitContainer {
  let tmp: any = []
  let nameContainers = divideByType(arr)

  nameContainers.forEach((name, index) => {
    const fruit = arr.filter(
      (fruit) => fruit.fruitType == nameContainers[index]
    )
    const nameFruits = getFruitsName(fruit)

    const payload = {
      name: nameContainers[index],
      fruits: [...nameFruits],
    }
    tmp.push(payload)
  })

  return tmp
}

export type IFruitStock = {
  name: string
  stock: number
}

// solution 3
export function getAllStock(arr: IFruit[]): IFruitStock[] {
  let nameContainers: string[] = []
  let stock: number[] = []

  for (let i = 0; i < arr.length; i++) {
    if (!nameContainers.includes(arr[i].fruitType)) {
      nameContainers.push(arr[i].fruitType)
    }
  }

  nameContainers.map((name) => {
    const filterFruit = arr.filter((fruit) => fruit.fruitType === name)
    let sum = 0
    filterFruit.forEach((fruit) => {
      sum += fruit.stock
    })
    stock.push(sum)
  })

  const payload: any = []
  nameContainers.map((data: string, index: number) => {
    const newData = {
      name: data,
      stock: stock[index],
    }
    payload.push(newData)
  })

  return payload
}

// case 2
function countComment(list: IComment) {
  if (!list) {
    return 0
  }

  let count = 1
  if (!list.replies) return count

  for (const item of list.replies) {
    count += countComment(item)
  }

  return count
}

export function countAllComments(lists: IComment[]) {
  let total = 0
  lists.forEach((list) => (total += countComment(list)))
  return total
}
