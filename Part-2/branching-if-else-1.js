const prompt = require('prompt-sync')(); // Perbaikan: Panggil fungsi setelah mengimpor modul

const password = prompt('Enter password: ');
const validPassword = 'password';

if (password === validPassword) {
    console.log("Selamat datang bos!");
} else {
    console.log("Password Salah, coba lagi!");
}

console.log("Terimakasih sudah menggunakan aplikasi kami");
