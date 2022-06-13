// function
// penggalan code yang befungsi utk melakukan task tertentu


function printHello() {
    console.log("Hello World!")
}

// call function - invoke function
// printHello()

function greeting(name) {
    // name adalah sebuah parameter
    // parameter adalah sebuah variable yang menerima value dari invoke
    console.log("Selamat pagi, " + name)
}
// greeting("Vincent")
// greeting("Admin")
// greeting("James")

// Cek apakah sebuah bilangan genap atau ganjil

// let num = 5;

function checkGanjilGenap(num) {
    if (num % 2 === 0) {
        console.log("Bilangan genap")
    } else {
        console.log("Bilangan ganjil")
    }
}

// checkGanjilGenap(5150)
// checkGanjilGenap(2751)

function checkGenapGanjil(n) {
    if (n % 2 === 1) {
        return n + " adalah Bilangan Ganjil"
    } else {
        return n + " adalah Bilangan Genap"
    }
}
// console.log(checkGenapGanjil(10))
// console.log(checkGenapGanjil(3))

// Modular Function

/**
 * STUDY CASE
 * 
 * Buat kalkulator sederhana.
 * Dengan membuat beberapa function berikut:
 * 
 * - penjumlahan(a, b) -> function akan menerima 2 parameter
 * - pengurangan(a, b)
 * - perkalian(a, b)
 * - pembagian(a, b)
 * 
 * - calculator(x, opr, y) -> function akan menerima 3 parameter
 * merupakan function utama yang di dalamnya terdiri dari beberapa function.
 * x adalah angka pertama
 * y adalah angka kedua
 * opr adalah operator
 * 
 * Contoh:
 * calculator(5, '+', 2) // 7
 * calculator(3, '-', 5) // -2
 */

const calculator = (x, opr, y) => {
    switch(opr){
        case '+':
            console.log(penjumlahan(x,y))
            break;
        case '-':
            console.log(pengurangan(x,y))
            break;
        case '*':
            console.log(perkalian(x,y))
            break;
        case '/':
            console.log(pembagian(x,y))
            break;
        default:
            console.log("Operator undefined!")
    }
}

const penjumlahan = (a, b) => {
    let jumlah = a + b;
    return jumlah
}
const pengurangan = (a, b) => {
    let kurang = a - b;
    return kurang
}
const perkalian = (a, b) => {
    let kali = a * b;
    return kali
}
const pembagian = (a, b) => {
    let bagi = a / b;
    return bagi
}

// test case
calculator(5, '+', 2)

