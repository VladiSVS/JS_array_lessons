let myArray = ["Wilhelmshavenerstr. 6", "45329", "Essen", "Deutschland"]
let besteFreunde = ["Elli", "Evgeniy"]
let person = ["Siauko", "Uladzimir", "Vladi", 25, "PC", "Belarus", "SuperCode"]

console.log(myArray)
console.log(besteFreunde)
console.log(person)

console.log(myArray.length)
console.log(besteFreunde.length)
console.log(person.length)

let myTrainer1 = ["Georg", "Anass", "Elaine", "Hakan"]
console.log(myTrainer1)

let myTrainer2 = new Array("Georg", "Anass", "Elaine", "Hakan")
console.log(myTrainer2)

let numArray = [5, 6, 7, 8, 9, 10]
console.log(numArray)
console.log(numArray.length)
console.log(numArray[4])

let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."
let meinText2 = "Wie geht es dir heute?"
let meinText3 = "Heute ist ein großer Tag für uns."

let split1 = meinText1.split()
let split2 = meinText2.split("")
let split3 = meinText3.split(" ")

console.log(split1)
console.log(split2)
console.log(split3)

// ["Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."]
// main.js:33 (22) ["W", "i", "e", " ", "g", "e", "h", "t", " ", "e", "s", " ", "d", "i", "r", " ", "h", "e", "u", "t", "e", "?"]
// main.js:34 (7) ["Heute", "ist", "ein", "großer", "Tag", "für", "uns."]

let songsArr = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"]
console.log(songsArr)

songsArr.push("Sweet Child O'Mine")
console.log(songsArr)

let totalSongs = songsArr.push("Sweet Child O'Mine")
console.log(totalSongs)

const artists = ["michael", "elvis"];
artists.push("justin", "charlie");
console.log(artists)

let heroUndEnemy = [["Batman", "The Joker"], ["Professor X", "Magneto"], ["Thor", "Loki"], ["Sinestro", "Malefic"], ["Doctor Dome", "Merlyn"], ["DeathStroke", "Multiplex"]]
console.log(heroUndEnemy)

heroUndEnemy.pop()
console.log(heroUndEnemy)

let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"]
console.log(deutscheGerichte)

deutscheGerichte.unshift("Bremer Knipp", "Pinkel mit Grünkohl", "Linseneintopf")
console.log(deutscheGerichte)

deutscheGerichte.shift()
console.log(deutscheGerichte)

let ent = deutscheGerichte.shift()
console.log(ent)

let numerArray = [23, 54, 75]
console.log(numerArray)

numerArray.push(89, 34, 45, 27, 65)
console.log(numerArray)

numerArray.unshift(1, 2, 3, 5, 7)
console.log(numerArray)

numerArray.pop()
numerArray.pop()
console.log(numerArray)

numerArray.shift()
numerArray.shift()
numerArray.shift()
numerArray.shift()
console.log(numerArray)

let arraySplice = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
]
console.log(arraySplice)
console.log(arraySplice.indexOf("imageTeilnehmer015supercode.jpg"))

let delImg1 = arraySplice.splice(4, 4)
console.log(delImg1)
console.log(arraySplice)

let delImg2 = arraySplice.splice(10, 5)
console.log(delImg2)
console.log(arraySplice)

let deiImg3 = arraySplice.splice(0, 2)
console.log(deiImg3)
console.log(arraySplice)

let arraySlice = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

let copyImg1 = arraySlice.slice(7, 15)
console.log(copyImg1)

let copyImg2 = arraySlice.slice(6, 12)
console.log(copyImg2)