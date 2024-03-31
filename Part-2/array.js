// Mendefinisikan array binatang
var binatang = ["kucing", "anjing", "tikus"];
console.log(binatang)

// Mengambil elemen pertama pada array
var pertama = binatang[0];
console.log(binatang)

// Menambahkan elemen baru ke array
binatang.push("burung");
console.log(binatang)

// Membuat array kosong
var arrayKosong = [];

// Mencetak semua elemen array
for (let i = 0; i < binatang.length; i++) {
    console.log('Cetak binatang ke-' + i + ": " + binatang[i]);
}
