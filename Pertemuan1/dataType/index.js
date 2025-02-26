let nama = "Alice"; // String
let umur = 25; // Number
let isStudent = true; // Boolean
let alamat = null; // Null
let pekerjaan; // Undefined

console.log(typeof "Hello"); // String
console.log(typeof 42); // Number
console.log(typeof true); // Boolean

/*

Data Types (Tipe Data) dalam JavaScript 🏷️

JavaScript memiliki dua jenis tipe data utama:

1. Primitive (Sederhana)

Number: Tipe data untuk angka (integer atau desimal).📌 Contoh: let umur = 25;, let pi = 3.14;

String: Kumpulan karakter dalam tanda kutip ("" atau '').📌 Contoh: let nama = "Alice";

Boolean: Nilai true atau false, digunakan dalam logika.📌 Contoh: let isActive = true;

Null: Tipe data yang secara eksplisit tidak memiliki nilai.📌 Contoh: let kosong = null;

Undefined: Variabel yang dideklarasikan tetapi belum memiliki nilai.📌 Contoh: let belumDiisi;

Symbol: Tipe data unik yang digunakan dalam objek kompleks.


2. Non-Primitive (Kompleks)

Object: Struktur data yang bisa menyimpan banyak nilai dalam bentuk key-value.📌 Contoh:

let orang = {
    nama: "Alice",
    umur: 25,
    pekerjaan: "Programmer"
};
console.log(orang.nama); // Alice

Array: List atau kumpulan data dalam satu variabel.📌 Contoh:

let angka = [1, 2, 3, 4, 5];
console.log(angka[0]); // 1

📌 Tips: Gunakan typeof untuk mengecek tipe data:
console.log(typeof "Hello"); // String
console.log(typeof 42); // Number
console.log(typeof true); // Boolean
console.log(typeof {}); // Object
console.log(typeof []); // Object (karena array adalah turunan dari object)
*/
