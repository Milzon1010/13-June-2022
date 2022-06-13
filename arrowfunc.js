// ES5
// var multiplyES5 = function(x, y) {
//     return x * y;
//   };
  
  // ES6
    //   var multiplyES6 = (x, y) => { return x * y };
    
    //   console.log(multiplyES6 (2,3));  // 6

    // Berhubung contoh fungsi multiplyES6 di atas hanya satu ekspresi, 
    // maka bisa disingkat lagi

//   var multiplyES6 = (x, y) => x * y;

// console.log(multiplyES6 (2,3));  // 6

// Jika parameter hanya satu, tidak wajib menggunakan tanda kurung.

//ES5
// var phraseSplitterEs5 = function phraseSplitter(phrase) {
//     return phrase.split(' ');
//   };
//   split adalah spacing between
  
  //ES6
  
//   var phraseSplitterEs6 = phrase => phrase.split(" ");
  
//   console.log(phraseSplitterEs6("ES6 Awesomeness"));  // ["ES6", "Awesomeness"]


// Sintak tanpa parameter

  //ES5
// var docLogEs5 = function docLog() {
//     // console.log(document);
// };

//ES6
// var docLogEs6 = () => { console.log(document); };

// docLogEs6(); // #document... <html> ….

// Sintak returnnya object:
// Jika return object, 
// maka harus dibungkus tanda kurung agar bias membedakan antara blok fungsi dengan objek.

//ES5
    // var setNameIdsEs5 = function setNameIds(id, name) {
    //     return {
    //       id: id,
    //       name: name
    //     };
    //   };
  
  // ES6
//   var setNameIdsEs6 = (id, name) => ({ id: id, name: name });
  
//   console.log(setNameIdsEs6 (1, "Akhdani"));   // Object {id: 1, name: "Akhdani"}

//   Apakah ada batasan pada arrow function ini?
//   Arrow function paling baik digunakan untuk fungsi non-method. 
// Perhatikan contoh berikut:

'use strict';
// var obj = {
//   i: 10,
//   b: () => console.log(this.i, this),
//   c: function() {
// //     console.log(this.i, this);
// //   }
// }

// obj.b(); // prints undefined, Window {...} (or the global object)
// obj.c(); // prints 10, Object {...}

// Dari contoh di atas bisa dilihat fungsi b() tidak bisa mengakses properti i, 
// saat mengakses this, ia justru menghasilkan global object.

// Arrow function tidak bisa digunakan sebagai konstruktor 
// dan akan terjadi error jika menggunakan new

    // var Foo = () => {};
    // var foo = new Foo(); // TypeError: Foo is not a constructor

// Arrow function tidak memiliki objek arguments.
    // var f = () => arguments[0] + n;
    // f(2);

// Arrow function ini bisa digunakan pada javascript higher order function