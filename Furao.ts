import { IComidaDePet } from "./IComidaDePet";
import { PequenoRoedor } from "./PequenoRoedor";

export class Furao extends PequenoRoedor {
    constructor() {
        super("Furão");
    }

    cavar(): void {
        this.felicidade++;
    }

    comer(comida: IComidaDePet): boolean {
        return comida === "insetos" || comida === "plantas" || comida === "sementes" || comida === "vegetais";
    }
}