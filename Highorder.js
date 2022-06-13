

// fungsinya  Salah satunya agar kode program kita sedikit lebih “bersih”,
// operasi pada array tidak perlu lagi menggunakan looping semacam for atau while.

// diketahui kita memiliki array yang akan melakukan fungsi-fungsi higher-order ini.

    var source = [1,2,3,4,5];



// forEach

// Looping pada semua elemen array, dan menjalankan operasi yang kita berikan.
      source.forEach(function(currentValue, currentIndex){
        console.log("index", currentIndex, "isinya", currentValue);
             });
 
 // index 0 isinya 1
 // index 1 isinya 2
 // index 2 isinya 3
 // index 3 isinya 4
 // index 4 isinya 5

//  filter

// Looping pada semua elemen array, 
// setiap elemen yang memenuhi kondisi akan dimasukkan ke dalam array hasil fungsi filter
// array sumber akan tetap utuh.

var filterGanjil = source.filter(function(currentValue, currentIndex){
    return currentValue % 2 === 1;
 });
 
 console.log(filterGanjil); // [1, 3, 5]

// map

// Looping pada semua elemen array
// dan menjalankan operasi pada masing-masing elemen array
// Hasilnya adalah array dengan panjang (length) yang sama
// namun isinya berupa hasil dari operasi pada masing-masing elemen array yang bersesuaian.

var dikaliDua = source.map(function(currentValue, currentIndex){
    return currentValue * 2;
 });
 
//  console.log(dikaliDua); // [2, 4, 6, 8, 10]

//  reduce

// Looping pada semua elemen array, dan menjalankan operasi pada elemen array
// Hasil operasi pada elemen ke-i, akan dijadikan parameter untuk operasi pada elemen berikutnya (i+1)
// ehingga hasil operasi reduce adalah akumulasi operasi pada semua elemen, bukan array
// endeknya, value yang tadinya banyak (array) menjadi satu saja.

var ditotalin = source.reduce(function(previousValue, currentValue, currentIndex){
    return previousValue + currentValue;
 });
 
 console.log(ditotalin); // 15

//  Untuk reduce, bisa ditambahkan parameter kedua yaitu initial value sebagai nilai permulaan 
//  sebelum reduce dieksekusi. Jadi seb

var ditotalin = source.reduce(function(previousValue, currentValue, currentIndex){
    return previousValue + currentValue;
 }, 5);
 
 console.log(ditotalin); // 20

//  reduceRight

// Sama seperti reduce, hanya saja dilakukan mulai dari elemen terakhir

var ditotalinDariKanan = source.reduceRight(function(previousValue, currentValue, currentIndex){
    return previousValue + currentValue;
 });
 
 console.log(ditotalinDariKanan); // 15

//  Sama seperti reduce, 
//  reduceRight juga bisa ditambahkan parameter kedua sebagai initial value.

// some

// Looping pada setiap elemen array dan menjalankan operasi pada setiap elemen array,
// jika ada satu saja yang hasilnya true, maka hasil fungsi some adalah true.

var apakahAdaAngkaTiga = source.some(function(currentValue, currentIndex){
    return currentValue === 3;
 });
 
 console.log(apakahAdaAngkaTiga); // true

//  every

// Mirip seperti some namun hasil operasi semua elemen 
// harus bernilai true agar hasil fungsi every adalah true

var apakahSemuanyaAngka = source.every(function(currentValue, currentIndex){
    return typeof currentValue === "number";
 });
 
 console.log(apakahSemuanyaAngka); //true

//  find

// Menampilkan isi elemen pertama yang memenuhi kondisi yang ditentukan, 
// jika tidak ada maka hasilnya adalah undefined.

var angkaYangLebihBesarDariDua = source.find(function(currentValue, currentIndex){
    return currentValue > 2;
 });
 console.log(angkaYangLebihBesarDariDua); // 3


//  findIndex

// Menampilkan index elemen pertama yang memenuhi kondisi yang ditentukan, 
// jika tidak ada maka hasilnya adalah -1.

var indexnyaAngkaYangLebihBesarDariDua = source.findIndex(function(currentValue, currentIndex){
    return currentValue > 2;
 });
 
 console.log(indexnyaAngkaYangLebihBesarDariDua); // 2

//  kalau mau digabung?
// Contohnya, setelah difilter, ingin dilakukan map
// Caranya adalah dengan method/function chaining, caranya seperti ini

var filterGanjilLaluKaliDua = source
   .filter(function(currentValue, currentIndex){
      return currentValue % 2 === 1;
   })
   .map(function(currentValue, currentIndex){
      return currentValue * 2;
   });

console.log(filterGanjilLaluKaliDua); // [2, 6, 10]

// Tapi ingat, chaining di atas bisa dilakukan karena hasil dari filter
// adalah array, jadi masih memiliki method map.
// Kalau awalnya, misalnya, di­-reduce, hasilnya bukanlah array sehingga tidak memiliki method map.

