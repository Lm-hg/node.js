const x=666;
console.log(x);
{
    const x= 0;
    console.log(x);
}
console.log(x);
// les boucles
table=[1,2,3,4,5];
for(let i=0;i<table.length;i++){
    console.log(i);
}
table.push("fin");
for (let a of table){
    console.log(a);
}


function hello(a,b){
    return console.log("Bonjour " + a + b);
}
hello(b='allo', a="fin")

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
palindrome("eliiiiiiiiiiiile")