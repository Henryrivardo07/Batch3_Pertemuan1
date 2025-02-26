//Selain operator dasar, ada juga operator penugasan untuk mempersingkat kode kita:

let x = 10;
x += 5; // Sama dengan x = x + 5
console.log(x); // 15

x -= 3; // Sama dengan x = x - 3
console.log(x); // 12

x *= 2; // Sama dengan x = x * 2
console.log(x); // 24

x /= 4; // Sama dengan x = x / 4
console.log(x); // 6

//console.log(0.1 + 0.2); // 0.30000000000000004 (!)
// console.log(9999999999999999); // 10000000000000000 (!)

// Kenapa bisa begitu? Karena JavaScript menggunakan floating-point arithmetic, yang terkadang tidak presisi. Solusi? Gunakan toFixed():

console.log((0.1 + 0.2).toFixed(2)); // "0.30"
