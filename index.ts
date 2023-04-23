import { Animal } from "./Animal";
import { Filhote } from "./Filhote";
import { Furao } from "./Furao";
import { Hamster } from "./Hamster";

console.log("questão 1");

const gato = new Animal("Branco");

gato.exibirAnimal();

gato.cadastrar("Bonito");
gato.cadastrar("Raivoso");
gato.cadastrar("Carinhoso");

//o método em questão irá retornar uma das 3 características acima aleatoriamente;
console.log(gato.exibirCaracteristica());

//------------------------------------------------------------
console.log("questão 2");

const filhote = new Filhote(["Spyke", "Chefe"], 34);

filhote.adotar("Kauê Ronald");

//------------------------------------------------------------
console.log("questão 3");

const hamster = new Hamster();
const furao = new Furao();

console.log(furao.especie);

furao.cavar();
furao.cavar();
furao.cavar();

console.log(furao.felicidade);

furao.cavar();
console.log(furao.felicidade);

console.log(furao.comer("frutas"));
console.log(furao.comer("plantas"));

console.log(hamster.especie);

hamster.correr();

console.log(hamster.felicidade);

hamster.correr();

console.log(hamster.felicidade);
console.log(hamster.comer());