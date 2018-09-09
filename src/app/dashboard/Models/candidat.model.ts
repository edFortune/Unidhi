

export class Responsable {
    adresse: string = '';
    telephoneFixe: string = '';
    portable: string = '';
    email: string = '';
    relation: string = '';
}


export class Candidat {
    nom: string = '';
    nomUsage: string = '';
    prenom: string = '';
    carteId: string = '';
    diplome: string = '';
    dateNaissance: Date = new Date();
    commune: string = '';
    adresse: string = '';
    telephoneFixe: string = '';
    portable: string = '';
    email: string = '';
    Responsable: Responsable = new Responsable();
} 