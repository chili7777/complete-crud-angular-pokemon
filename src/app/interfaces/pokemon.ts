export interface Pokemon {
    id?: number;
    name: String;
    image: String;
    type: String;
    hp: number;
    attack: number;
    defense: number;
    idAuthor: number;
    created_at?: Date;
    updated_at?: Date;
}
