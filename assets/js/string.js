//  pedir al usuario un string
//  contar las vocales y las consonantes
// imprimir en consola
// 2 vocales y 2 consonantes

let word= prompt("dame una palabra: ").toLowerCase()
let consonant=0
let vowels=0

while(word.length <= 0){
    word=prompt("dame una palabra: ").toLowerCase()
}

for(i=0; i<word.length; i++){
    if(word[i]== "a" || word[i]== "e" || word[i]== "i" || word[i]== "o" || word[i]== "u" || word[i]== "á" || word[i]== "é" || word[i]== "í" || word[i]== "ó" || word[i]== "ú"){
        vowels++ 
    } else{
        consonant ++
    }
}
console.log("el numero de vocales es ", vowels, "el numero de consonantes es ", consonant)