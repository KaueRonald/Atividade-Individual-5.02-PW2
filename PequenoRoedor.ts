import { IComidaDePet } from "./IComidaDePet";

export abstract class PequenoRoedor {
    readonly especie: string;
    felicidade: number = 0;

    constructor(especie: string) {
        this.especie = especie;
    }

    abstract comer(comida: IComidaDePet): boolean;

    estaFeliz(): boolean {
        return this.felicidade > 0;
    }
} 