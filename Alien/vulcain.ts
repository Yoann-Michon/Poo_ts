import { Alien } from "./alien";
import { Emotion } from "./emotion";

export class Vulcain extends Alien {
    emotion: Emotion;
    telepatie: boolean;

    constructor(nom: string, etoile: string, emotion: Emotion) {
        super(nom, etoile);
        this.emotion= emotion;
        this.telepatie = false;
    }

    joke(ajoke:string){
        console.log("?");
    }
}
