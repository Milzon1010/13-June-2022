// CONDITIONAL

// Study Case 1
/**
 * Tiket Wahana
 *
 * Buatlah sebuah code untuk cek apakah:
 * - Jika umur anak lebih atau sudah 17 tahun maka:
 *    - Jika tinggi anak kurang dari 150 cm, maka cetak "Tidak boleh masuk"
 *    - Jika tinggi anak sudah atau lebih dari 150cm, maka cetak "Boleh masuk"
 *
 * - Jika umur anak kurang dari 17 tahun, maka cetak:
 *    - Jika tinggi anak kurang dari 170 cm, maka cetak "Tidak boleh masuk"
 *    - Jika tinggi anak sudah atau lebih dari 170cm, maka cetak "Boleh masuk"
 *
 */

let age = 15;
let height = 175;

// console.log("TIKET WAHANA")
// parentheses(kurung biasa) brackets(kurung kurawal)

if (age >= 17) {
    if (height >= 150) {
        console.log("boleh masuk")
    } else {
        console.log("tidak Boleh masuk")
    }
} else {
    if (height >= 170) {
        console.log("Boleh masuk")
    } else {
        console.log("tidak Boleh masuk")
    }
}


// Study Case 2
/**
 * WARUNG MAKAN
 *
 * Buatlah sebuah code untuk menampilkan pilihan menu makanan.
 * Ada 3 menu nasi: NasiGoreng, NasiKuning, NasiUduk
 *
 * Jika memilih salah satu nasi maka tampilkan seperti berikut:
 * Vincent memilih Nasi Goreng.
 */

// let name = "Admin"
// let menuNasi = "Nasi Goreng"

// switch (menuNasi) {
//     case 'Nasi Goreng':
//         console.log(name + " memilih Nasi Goreng.")
//         break;
//     case 'Nasi Kuning':
//         console.log(name + " memilih Nasi Kuning.")
//         break;
//     case 'Nasi Uduk':
//         console.log(name + " memilih Nasi Uduk.")
//         break;
//     default:
//         console.log("Menu tak ada gan, boss.")
//         break;
// }

/**
 * STUDY CASE 3
 *
 * * Vending machine memberikan minuman input string
 *
 * Jika minuman kosong, maka tampilkan "Input minuman"
 * Jika minuman diinput "Sweet Tea" , maka tampilkan "You choose Sweet Tea, thanks"
 * Jika minuman diinput "Plain Tea" , maka tampilkan "You choose Plain Tea, thanks"
 * Jika minuman diinput "Boba" , maka tampilkan "You choose Boba, thanks"
 * Jika minuman diinput "Milk Coffee" , maka tampilkan "You choose Milk Coffee, thanks"
 * Jika minuman diinput "Choco Ice" , maka tampilkan "You choose Choco Ice, thanks"
 * Jika minuman diinput salah, tampilkan "minuman is not defined"
 *
 */

// let minuman = "Sweet Tea";

// switch (minuman) {
//     case 'Sweet Tea':
//         console.log("You choose Sweet Tea, thanks.")
//         break;
//     case 'Plain Tea':
//         console.log("You choose Plain Tea, thanks.")
//         break;
//     case 'Boba':
//         console.log("You choose Boba, thanks.")
//         break;
//     case 'Milk Coffee':
//         console.log("You choose Milk Coffee, thanks.")
//         break;
//     case 'Choco Ice':
//         console.log("You choose Choco Ice, thanks.")
//         break;
//     default:
//         if (minuman === "") {
//             console.log("Input minuman is not defined")
//         } else {
//             console.log("minuman is not defined")
//         }
//         break;
// }

/**
 * STUDY CASE 4
 * 
 *
 * Klasifikasi level untuk karakter dari sebuah game
 * 
 * Jika Power lebih dari 100, maka Status disebut "Expert"
 * Jika Power di atas 70 sampai 100, maka Status disebut "Pro"
 * Jika Power di atas 50 sampai 70, maka Status disebut "Normal"
 * Jika Power di atas 30 sampai 50, maka Status disebut "Basic"
 * Jika Power di bawah 30, maka Status disebut "Beginner"
 */

 let power = 95;

 // if (power > 100) {
 //     console.log("Expert")
 // } else if (power > 70 && power <= 100) {
 //     console.log("Pro")
 // } else if (power > 50 && power <= 70) {
 //     console.log("Normal")
 // } else if (power > 30 && power <= 50) {
 //     console.log("Basic")
 // } else {
 //     console.log("beginner")
 // }
 
 /**
  * STUDY CASE 5
  * 
  * Pilihan Coupon Code untuk diskon e-commerce
  * 
  * a. FreeOngkir
  * Jika pembelian lebih dari atau sama dengan 50.000, ada potongan 10%
  * Jika pembelian antara 30.000 dan 50.000, ada potongan 5%
  * Jika pembelian kurang dari 30.000, ada potongan 2.5%
  * 
  * b. Free15%
  * Jika pembelian lebih dari atau sama dengan 30.000, ada potongan 15%
  * Jika pembelian kurang dari 30.000, ada potonga 0%
  * 
  * Contoh:
  * Total harga barang = 50000
  * Kupon = FreeOngkir
  * 
  * Total yang di bayar = 50000 - 50000*15% = 42500
  * 
  * Cetak: Total yang dibayar adalah Rp. 42500
  */
 
// 