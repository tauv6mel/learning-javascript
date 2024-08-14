let fruits = ['apple', 'orange', 'pear']
console.log(fruits)
console.log(fruits[0])
console.log(fruits[2])

console.log(fruits.length)

fruits.push('grape')
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.splice(1, 0, 'banana')
console.log(fruits)

let cats = [
    {
        'name': 'Fluffy',
        'age': 2
    },
    {
        'name': 'Stella',
        'age': 5
    },
    {   
        'name': 'Munchkin',
        'age': 7
    }

]
console.log(cats)
console.log(cats[0])
console.log(cats[1].name)