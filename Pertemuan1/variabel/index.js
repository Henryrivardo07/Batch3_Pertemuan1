var nama = "Alice";
nama = "Bob"; // ✅ Bisa diubah

let umur = 25;
umur = 26; // ✅ Bisa diubah

// const negara = "Indonesia";
// negara = "Jepang"; // ❌ Error: Assignment to constant variable

//CONTOH KASUS

if (true) {
  var x = 10;
}
console.log(x);

/*
Kenapa var tidak disarankan?

Tidak memiliki block scope, yang bisa menyebabkan bug.

Bisa dideklarasikan ulang tanpa peringatan.

Sulit dilacak saat bekerja dengan kode besar.

Padahal, kita berharap x hanya ada di dalam if. Nah, inilah masalah var!
*/
