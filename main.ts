import { Alien } from "./Alien/alien";
import { Emotion } from "./Alien/emotion";
import { Klingon } from "./Alien/klingon";
import { Vulcain } from "./Alien/vulcain";


function negocier(alien:Alien) {
    alien.hi();
    alien.talk("I'm your father!!!");

    const jokes=[
        "azerttyuyytre ?","ferfukljbiuhnp ?"
    ]
    const ajoke=jokes[Math.floor(Math.random()*jokes.length)];
    console.log(ajoke);
    alien.joke(ajoke);
}

const bob = new Alien("Bob", "Dune");
const alice = new Alien("Alice", "Betelgeuse");

const chti = new Klingon("chti","Lune",false);
const chat = new Vulcain("chat","Dune",Emotion.Interet);

alice.hi();
bob.hi();

negocier(chti);
negocier(chat);