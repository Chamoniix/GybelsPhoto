export class Post {
  id: number;
  titre: string;
  description: string;
  dateCreation: Date;
  auteur: string;

  constructor(id: number, titre: string, description: string, dateCreation: Date, auteur: string) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.dateCreation = dateCreation;
    this.auteur = auteur;
  }
}
