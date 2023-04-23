import { PequenoRoedor } from "./PequenoRoedor";

export class Hamster extends PequenoRoedor {
    constructor() {
        super('Hamster');
    }

    correr(): void {
        this.felicidade++;
    }

    comer(): boolean {
        return true;
    }
}