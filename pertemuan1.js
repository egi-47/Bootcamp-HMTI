//deklarasi nama variable
var name;

name = "HMTI"

//tampilkan di console
console.log("pelatihan" + name);
console.log("HMTI" + 1);

//tipe data number
var angka1 = 10; //integer
var angka2 = 5.5; //double / float

//tipe data boolean
var sudahnikah = true; //atau false

console.log(name + angka1);
console.log(angka1 + angka2);
console.log(sudahnikah);

//tipe data array
var names = ["Jois" , "Fardan" , "Ibnu" , "Egi" , "Asep"];
console.log(names);
console.log(names[3]); //cara manggil array ke 3
console.log("Total", names.length);
console.log("Data Terakhir: ", names[names.length-1]); //cara memangil data terakhir

//variable object
var biodata =[
	"Fardan",
	21,
	"Bekasi" 
];

var biodata = {
	name : "Fardan",
	age : 21,
	address : "Bekasi",
	"Sudah menikah": false,
	hobbies : ["coding" , "bola" , "renang" , "takraw"],
	ucapkata: function () {
		console.log("Ada ibu ibu guys");
	}	
};

console.log(biodata);
console.log("namanya: ", biodata.names);
console.log("umurnya: ", biodata['age']);
console.log("hobbies ke 2", biodata.hobbies[1]);
console.log("hobbies terakhir", biodata.hobbies[biodata.hobbies.length-1]);
biodata.ucapkata();

//cara membuat array of object
var peserta = [
	{
		name: "Fardan",
		age : 20
	},
	{
		name: "Ibnu",
		age : 20,
		address : "Bekasi"
	}
];

console.log(peserta);
console.log("peserta pertama", peserta[0]["name"]);
console.log("umur peserta pertama", peserta[0].age);

console.log(2 == '2');
console.log(2 === '2');

