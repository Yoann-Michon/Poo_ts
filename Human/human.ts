import { Genre } from "./genre";
import { IBeing } from "../Interface/Ibeing";

export class Human implements IBeing{
    name:string;
    age:number;
    genre: Genre;

    constructor(name:string, age:number, genre:Genre) {
        this.name=name;
        this.age=age;
        this.genre=genre;
    }

    drink() {
        throw new Error("Method not implemented.");
    }
    
    sleep() {
        throw new Error("Method not implemented.");
    }
}