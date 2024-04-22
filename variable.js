const x=666;
{
    const x= 0;
}
// les boucles
table="bon";
console.log(table);
// for(let i=0;i<table.length;i++){
//     console.log(i);
// }
// for (let a of table){
//     console.log(a);
// }


function estPalindrome(word) {
    // Cas de base : si la chaîne est vide ou a une seule lettre, c'est un palindrome
    if (word.length <= 1) {
        return true;
    }
    
    // Vérifie si le premier et le dernier caractère sont les mêmes
    if (word[0] !== word[word.length - 1]) {
        return false;
    }
  
    // Appel récursif : vérifie le reste de la chaîne en excluant le premier et le dernier caractère
    return estPalindrome(word.slice(1, -1));
  }
function hello(a,b){
    return console.log("Bonjour " + a + b);
}

function palindrome(b){
    a=b.toUpperCase()
    ouinon=1
    milieu=a.length/2;
    for(let i=0; i<milieu;i++){
        if(a[i]!=a[a.length - (i + 1)]){
            ouinon++;
        }
    }
    if (ouinon==1){
        console.log("oui");
    }else{
        console.log("non");
    }
}


function ispair(nombre){

    let a= Math.abs(nombre)
        if((a - 2)==0 || a==0){
            return console.log(("pair"));
        }else if((a - 2)==1 || a==1){
            return console.log("impair");
        }
        return ispair(a-2)
    
}

ispair(-400)
ispair(401)

