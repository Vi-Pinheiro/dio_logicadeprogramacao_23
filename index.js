class hero{
    constructor(nameHero, typeHero){
        this.namehero = nameHero
        this.typeHero = typeHero
        this.attackHero = ""
                
        if(typeHero === "Mago"){
            this.attackHero = "magia";

        }else if(typeHero === "Guerreiro"){
            this.attackHero = "espada";

        }else if(typeHero === "Monge"){
            this.attackHero = "arte marcial";
        
        }else if(typeHero === "Ninja"){
            this.attackHero = "shuriken";
        }
        else{
            this.attackHero = "mão";
        }
    }

    attack(){
       console.log(`O heroi chamado ${this.namehero}, do tipo ${this.typeHero}, atacou os inimigos com uma ${this.attackHero}!}`)
    }
}

let Hero1 = new hero("Casin", "Monge", "")
let Hero2 = new hero("Varis", "Guerreiro", "")
let Hero3 = new hero("Morgan", "Ninja", "")
let Hero4 = new hero("Bilbor", "Mago", "")

Hero1.attack()
Hero2.attack()
Hero3.attack()
Hero4.attack()
