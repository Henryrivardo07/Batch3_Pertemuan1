const age = 18;

if (age >= 18) {
  console.log("You are an adult."); // Ini akan dijalankan karena kondisi benar
}

// contoh penting if di konversi menjadi boolean under the hood
if (1) {
  console.log("truthy!"); // 'truthy!'
}

if (0) {
  console.log("falsy!"); // tidak akan dijalankan
}

if ("hello") {
  console.log("truthy!"); // 'truthy!'
}

if ("") {
  console.log("falsy!"); // tidak akan dijalankan
}

if (null) {
  console.log("falsy!"); // tidak akan dijalankan
}

if (undefined) {
  console.log("falsy!"); // tidak akan dijalankan
}

if (NaN) {
  console.log("falsy!"); // tidak akan dijalankan
}
