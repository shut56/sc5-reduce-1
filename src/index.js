const numbers = [3,1,2,3,4,5,3]

console.log(
  // map
  numbers.reduce((acc, rec) => {
    const multi = rec * 2
    return [...acc, multi]
    // 1 - [2]
    // 2 - [2, 4]
    // 3 - [2, 4, 6] ...
  }, []),
  // filter
  numbers.reduce((acc, rec) => {
    if (rec % 2 === 0) {
      return [...acc, rec]
      // 2 - [...[], 2]
      // 4 - [...[2], 4]
    }
    return acc
    // 1 - []
    // 3 - [2]
    // 5 - [2,4]
  }, []),
  // find
  numbers.reduce((acc, rec) => {
    if (rec === 3 && rec !== acc) {
      return rec
    }
    return acc
  }, 0)
)

// const list = [...numbers, 6]
// console.log([...[...[...list, 7], 8], 9])

const users = [
  { id: 'u1', firstName: 'Pepe', lastName: 'Frog', age: 40 },
  { id: 'a2', firstName: 'Iriska', lastName: 'Sweet', age: 20 },
  { id: 'b3', firstName: 'Masson', lastName: 'Eye', age: 30 },
  { id: 'c3', firstName: 'Tatat', lastName: 'Atat', age: 43 },
  { id: 'y3', firstName: 'Andrew', lastName: 'Sher', age: 20 },
  { id: 't1', firstName: 'Alex', lastName: 'Larry', age: 15 },
  { id: 'y2', firstName: 'Juli', lastName: 'Smy', age: 18 },
  { id: 'u3', firstName: 'Euro', lastName: 'Hash', age: 55 },
  { id: 'i3', firstName: 'Eugene', lastName: 'Bug', age: 27 },
  { id: 'h3', firstName: 'Sasha', lastName: 'Nov', age: 31 },
  { id: 'jj3', firstName: 'Vasya', lastName: 'Gorodskoy', age: 3 },
]

// console.log(
//   // array -> object
//   users.reduce((acc, user, index) => {
//     return { ...acc, [user.id]: {...user, bool: index % 2 === 0 } }
//   }, {})
// )

// console.log(
//   numbers
//     .filter((num) => num < 4)
//     .filter((num, index, array) => {
//       // console.log('NUM: ', num, 'INDEX: ', index)
//       return array.indexOf(num) === index
//     })
// )

/*
1. Pepe Frog
2. Iriska Sweet
...
*/

// console.log(numbers.reduce((acc, rec) => {
//     // console.log(`
//     // Acc: ${acc}
//     // Rec: ${rec}
//     // RESULT OF ${acc} + ${rec} = ${acc + rec}
//     // `)
//     return acc * rec
//   }, 1))

// console.log(
//   users.reduce((acc, rec, index) => {
//     return `${acc}${index + 1}. ${rec.firstName} ${rec.lastName}\n`
//   }, '')
// )

/*
{
  'less 10': [],
  'less 20': [],
  'less 30': [],
  'less 40': [],
  'less 50': []
}
*/

console.log(
  users.reduce((acc, rec) => {
    if (rec.age <= 20) {
      return {...acc, 'less 20': [...acc['less 20'], rec] }
    }
    if (rec.age <= 30) {
      return {...acc, 'less 30': [...acc['less 30'], rec] }
    }
    if (rec.age <= 40) {
      return {...acc, 'less 40': [...acc['less 40'], rec] }
    }
    if (rec.age > 40) {
      return {...acc, 'more 40': [...acc['more 40'], rec] }
    }
    return acc
  }, {
    'less 20': [],
    'less 30': [],
    'less 40': [],
    'more 40': []
  })
)

console.log(
  users.reduce((acc, rec) => {
    const upAge = Math.ceil(rec.age / 10) * 10
    if (typeof acc[`less ${upAge}`] === 'undefined') {
      return {...acc, [`less ${upAge}`]: [rec]}
    }
    return {...acc, [`less ${upAge}`]: [...acc[`less ${upAge}`], rec]}
  }, {})
)
