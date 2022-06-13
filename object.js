// Object
// variable yang berisi beberapa value, mirip array tetapi punya sebuah key


// let students = ["Vincent", 3.21, true]
// console.log(students)

let student = {
    name: "Vincent",
    gpa: 3.21,
    isGraduated: true
}
// console.log(student.name)
// console.log(student.gpa)
// console.log(student["isGraduated"])

// let items = ["Monitor LG 24inch", 1250000, 5, 'monitor', false];

/**
 * STUDY CASE 1
 * 
 * Convert / rubah array di atas menjadi object seperti berikut:
 * 
 * {
 *      name: "Monitor LG 24inch",
 *      price: 1250000,
 *      stock: 5,
 *      type: 'monitor',
 *      isSold: false
 * }
 * 
 * Dengan menggunakan sebuah function.
 */

function convertToObject(arr) {
    let result = {};

    result.name = arr[0];
    result.price = arr[1];
    result.stock = arr[2];
    result.type = arr[3];
    result.isSold = arr[4];

    return result;
}
// call function / invoke function
// console.log(convertToObject(["Monitor LG 24inch", 1250000, 5, 'monitor', false]))
// console.log(convertToObject(["Speaker 123", 150000, 3, 'speaker', false]))
// console.log(convertToObject(["Razor Mouse", 250000, 5, 'mouse', true]))

// Array Of Objects

let data = {
    name: "math data",
    type: "logic",
    tags: ["data1", "data2"],
    detail: {
        status: "done"
    },
    isDone: true
}
// console.log(data)

let carts = [
    {
        id: 1,
        name: "Monitor LG 24inch",
        price: 1250000
    }, {
        id: 2,
        name: "Speaker",
        price: 150000
    }, {
        id: 3,
        name: "Razor mouse",
        price: 250000
    }
]
// console.log(carts)


/**
 * STUDY CASE 2
 * 
 * Convert / rubah array 2d diatas menjadi array of objects
 * Buat dengan 2 function:
 * - function changeToObject : mengubah dari array menjadi object
 * - function getData : merupakan function utama.
 * 
 * Result :
 * [
 *      {
 *          id: 1,
 *          name: 'chicken 1pc',
 *          price: 50000,
 *          category: 'poultry'
 *      },
 *      {
 *          id: 2,
 *          name: 'quail 1pc',
 *          price: 55000,
 *          category: 'poultry'
 *      },
 *      {
 *          id: 3,
 *          name: 'sirloin meat',
 *          price: 150000,\
 *          category: 'beef'
 *      }
 * ]
 */

let rawData = [
    ["chicken 1pc", 50000, 'poultry'],
    ["quail 1pc", 55000, 'poultry'],
    ["sirloin meat", 150000, 'beef']
]

function changeToObject(id, arr) {
    let result = {}

    result.id = id
    result.name = arr[0]
    result.price = arr[1]
    result.category = arr[2]

    return result
}

function getData(data) {
    let resultArr = []

    for (let i = 0; i < data.length; i++) {
        let tempObj = changeToObject(i + 1, data[i])
        resultArr.push(tempObj)
    }

    return resultArr
}

console.log(getData(rawData))