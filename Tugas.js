//tipe data boolean
var a = true;
var b = false;

console.log(a.toString()); //true
console.log(b.toString());

//tipe data array
var kerjaan = ["Dokter" , "Polisi" , "Guru" , "Pilot" , "Masinis"];
console.log(kerjaan);
console.log(kerjaan[2]); //cara manggil array ke 2
console.log("Total", kerjaan.length);
console.log("Data Terakhir", kerjaan[kerjaan.length-1]); //cara memangil data terakhir

//variable object
var mobil = {
	merk : "Toyota",
	nama : "Avanza",
	nopol : "B1801KJI",
	warna : ["hitam" , "silver" , "putih" , "merah"],
	ucapkata: function () {
		console.log("Hiyaa Hiyaa");
	}	
};

console.log(mobil);
console.log("merknya: ", mobil.merk);
console.log("namanya: ", mobil['nama']);
console.log("warna ke 2", mobil.warna[1]);
console.log("warna terakhir", mobil.warna[mobil.warna.length-1]);
mobil.ucapkata();

//membuat array of object
var orang = [
{
		name: "Camelia",
		age : 20,
		gender : "Perempuan"
	}
];

console.log(orang);
console.log("orang pertama", orang[0]["name"]);
console.log("umur orang pertama", orang[0].age);

//looping while
var	orang =  [
{
		name: "Camelia",
		age : 20,
		gender : "Perempuan"
	}
];

var i = 0;
while (i < orang.length){
	console.log(orang[i]);
	i++;
}	
