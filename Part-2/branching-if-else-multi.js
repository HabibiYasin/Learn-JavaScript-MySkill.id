const prompt = require('prompt-sync')({ sigint: true });
const nilai = parseFloat(prompt('Masukan nilai: '));

// Memeriksa apakah nilai yang dimasukkan adalah angka
if (isNaN(nilai)) {
    console.log("Harap Masukkan Angka");
} else if (nilai < 0 || nilai > 100) {
    console.log("Harap Masukkan Angka 1-100");
} else {
    let grade;

    if (nilai > 90) {
        grade = "A";
    } else if (nilai > 80) {
        grade = "B+";
    } else if (nilai > 70) {
        grade = "B";
    } else {
        grade = "F";
    }

    console.log("Grade adalah = " + grade);
}
