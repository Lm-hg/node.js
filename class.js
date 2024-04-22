class voiture{
    constructor(marque, couleur, prix) {
        this.marque = marque;
        this.couleur = couleur;
        this.prix = prix;
    }

    infos(){
        console.log("Les infos: ");
        console.log(`La marque: ${this.marque}`);
        console.log(`La marque: ${this.couleur}`);
        console.log(`La marque: ${this.prix} €`);
    }
}
let ferrari = new voiture("ferrari","rouge", 10000000)
ferrari.infos()
console.log(ferrari);