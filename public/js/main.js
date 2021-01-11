// EXO 1

let multiplicateur = 5;

for (let i = 1; i <= 9; i++) {
    console.log(`${multiplicateur} * ${i} = ${multiplicateur * i}`);
}

// EXO 2


for (let i = 1; i <= 9; i+=2) {
    console.log(`${multiplicateur} * ${i} = ${multiplicateur * i}`);
}

// EXO 3

let nb = 20

for (let i = 20; i >= 0; i-=2) {
    console.log(`${i} est pair`);
}

// EXO 4

let coding16 = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]

let longsPrenoms = [];
let petitsPrenoms = []

// for (let i = 0; i < coding16.length; i++) {
//     if (coding16[i].length >= 5) { 
//         longsPrenoms.push(coding16[i]);
//     }
// }

// console.log(longsPrenoms)

coding16.forEach(el => {
    if (el.length >= 5) {
        longsPrenoms.push(el)
    } else {
        petitsPrenoms.push(el)
    }
});

console.log(longsPrenoms);

// EXO 5

let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
let grossesSommes = [];
let petitesSommes = [];

// for (let index = 0; index < sommes.length; index++) {
//     if (sommes[index] > 60) {
//         grossesSommes.push(sommes[index])
//         sommes.splice(index, 1)
//     }
// }

sommes.forEach(el => {
    if (el > 60) {
        grossesSommes.push(el)
        sommes.splice(el, 1)
    } else {
        petitesSommes.push(el)
        sommes.splice(el, 1)
    }
});

console.log(grossesSommes);
console.log(petitesSommes);
console.log(sommes);

// EXO 6

let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

let typeString = []
let typeNumber = []
let typeObject = []
let typeAutre = []

donnees.forEach((el, i) => {
    if (typeof el == 'string') {
        console.log(`${typeof el} = ${el} à l'indice ${i}`);
        typeString.push(el)
    } else if (typeof el == 'number') {
        console.log(`${typeof el} = ${el} à l'indice ${i}`);
        typeNumber.push(el)
    } else if (typeof el == 'object') {
        console.log(`${typeof el} = ${el} à l'indice ${i}`);
        typeObject.push(el)
    } else {
        console.log(`${typeof el} = ${el} à l'indice ${i}`);
        typeAutre.push(el)
    }
});

console.log(typeString);
console.log(typeNumber);
console.log(typeObject);
console.log(typeAutre);