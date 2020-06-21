export class Functie {
    public nume: string;
    public intervalSalariu: {
        deLa: number;
        la: number;
    }
    public experienta: number;
}

export class Domeniu {
    public nume: string;
    public functii: Functie[];
}