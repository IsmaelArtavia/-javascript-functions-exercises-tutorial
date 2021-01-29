// AQUI SE CREA LA FUNCION DE TIPO FLECHA
const rapid = (str) => {
    str = str.toLowerCase();
    //declaracion 
    let palabraSinVocales = "";
    //procesamos
    for(let i=0; i < str.length; i++)
    {
        if (!(str[i]=="a" || str[i]=="e" || str[i] == "i" || str[i] == "o" || str[i] == "u" ))
        {
            palabraSinVocales += str[i].toUpperCase();
        }
    }
    //salida
    return palabraSinVocales;
}

// const rapid = (str)=>{
//     let newWords = [];
//     let vowels = ['a','e','i','o','u'];
//     for (let i = 0; i < str.length; i++) {
        
//         if(vowels.includes(str[i])){
//             console.log(str[i]);
//         }else{
//             newWords.push(str[i].toUpperCase());
//         }
//     }
//     return newWords.join('');
// }


//From this line up Do not change code below
let str = 123435;

console.log(rapid(str));

