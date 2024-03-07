import { IBeing } from "../Interface/Ibeing";

export class Alien implements IBeing{
    readonly name: string;
    readonly etoile: string;
    public bienveillance: boolean;
    public qi?: number;

    constructor(name: string, etoile: string) {
        this.name = name;
        this.etoile = etoile;
        this.bienveillance = true;
    }
    drink() {
        
    }
    sleep() {
        
    }

    hi(){
        console.log(`hi, I'm ${this.name}`);
    }

    talk(message:string){
       console.log(`Enchanté`);
    }
    
    joke(ajoke:string):void{}
}