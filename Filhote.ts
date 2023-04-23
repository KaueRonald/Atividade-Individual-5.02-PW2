import { IFilhote } from "./IFilhote";

export class Filhote implements IFilhote {
    cores: string[];
    pelagem: number;
    tutor: string | undefined;

    constructor(cores: string[], pelagem: number) {
        this.cores = cores;
        this.pelagem = pelagem;
    }

    public adotar(tutor: string) {
        this.tutor = tutor;
        console.log(`Filhote adotado por ${tutor}`);

    }
}