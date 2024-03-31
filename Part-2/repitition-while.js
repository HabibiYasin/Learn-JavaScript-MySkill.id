const prompt = require('prompt-sync')({ sigint: true });

// Meminta input dari pengguna untuk memulai
var ulangi = prompt("Are you ready? "); // Input 1
console.log("Start");

var counter = 0;

while (ulangi.toLowerCase() === "yes") {
    var jawab = prompt("Apakah anda mau mengulang? (yes/no) : ");
    counter++;

    if (jawab.toLowerCase() === "no") {
        ulangi = "no";
    }

    console.log("Pengulangan ke-" + counter);
}
