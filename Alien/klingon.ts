import { Alien } from "./alien";

 export class Klingon extends Alien {
    traducteur: boolean;

    constructor(nom: string, etoile: string,translate:boolean) {
        super(nom, etoile);
        this.traducteur = translate;
    }

    joke(ajoke:string){
        console.log("woarf");
    }

    hi(){
        if (this.traducteur == false){
            console.log("dgjfzkgv")
        }else{
            this.hi();
        }
    }
}
