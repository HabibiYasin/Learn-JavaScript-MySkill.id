// Membuat Fungsi dengan Cara Biasa
function namaFungsi(){
    console.log("Hello World!");
}
// Cara memanggil Fungsi
namaFungsi();
// Output: "Hello World!"

//Membuat Perulangan Fungsi
function sayMultiHello(iter){
    for(i=0; i<iter; i++){
        namaFungsi(3)
    }
}
sayMultiHello()


// Membuat Fungsi dengan Ekspresi
var namaFungsiEkspresi = function(){
    console.log("Hello World!");
}
namaFungsiEkspresi();
// Output: "Hello World!"

// Membuat Fungsi dengan Tanda Panah
var namaFungsiPanah = () => {
    console.log("Hello World!");
}
namaFungsiPanah();
// Output: "Hello World!"

// atau seperti ini (jika isi fungsi hanya satu baris):
var namaFungsiPanahSingkat = () => console.log("Hello World!");
namaFungsiPanahSingkat();
// Output: "Hello World!"

// Contoh Fungsi dengan parameter
function kali(a, b){
    hasilKali = a * b;
    console.log("Hasil kali a*b = " + hasilKali);
}
kali(3, 2); // -> Hasil kali a*b = 6

// Contoh Fungsi yang mengembalikan nilai
function bagi(a,b){
    hasilBagi = a / b;
    return hasilBagi;
}
// Memanggil fungsi
var nilai1 = 20;
var nilai2 = 5;
var hasilPembagian = bagi(nilai1, nilai2);
console.log(hasilPembagian); //-> 4
