import { Injectable } from '@angular/core';
import { Vetement} from '../model/vetements.model';
import { Categorie } from "../model/categorie.model";

@Injectable({
providedIn: 'root'
})
export class VetementService {
  vetement!: Vetement;
  AjouterVetement(vet: Vetement){
    this.tab_vet.push(vet);
    console.log("Ajout avec succes : "+vet.marque);
    }
    supprimerVetement(vet: Vetement){
      const index = this.tab_vet.indexOf(vet, 0);
      if (index > -1) {
      this.tab_vet.splice(index, 1);
      }
      }
      listeCategories():Categorie[] {
        return this.Categories;
        }
        consulterCategorie(id:number): Categorie{
        return this.Categories.find(cat => cat.codec == id)!;
        }


tab_vet : Vetement[];
Categories! : Categorie[];

constructor() {
  this.Categories = [ 
    {codec : 1, nomCat : "chez tous", description:"dispoibles tt la saison"},
    {codec : 2, nomCat : "soiree", description:"selement pour les femmes"},
    {codec : 3, nomCat : "demi saisons", description:"Toutes les tailles disponible"}
  ]; 


this.tab_vet = [
  {codea : 1, marque : "zara", prix : 39.100 , /*taille:"standard", modele:"pantallons",*/qte : 8,
   dateAjout : new Date("09/25/2021"),categ:{codec : 1, nomCat :"chez tous", description:"dispoibles tt la saison"}},

  {codea : 2, marque : "h&m", prix : 45.900,/*taille:"standard", modele:"robes",*/qte :11, 
  dateAjout : new Date("09/30/2021"),categ:{codec : 2, nomCat :"soiree", description:"selement pour les femmes"}},

  {codea : 3, marque : "pullandbear", prix : 26,/* taille:"standard",modele:"chemises",*/qte : 5,
   dateAjout : new Date("10/03/2021"),categ:{codec : 3, nomCat :"demi saison", description:"Toutes les tailles disponible"}}
   ];
    }
    calculNbVetements(): number{
      return this.tab_vet.length;
      }
      calculTotalStock(): number{
      let tot=0;
      this.tab_vet.forEach( (vet) => {
      tot +=vet.prix!*vet.qte! ;
      })
      return tot;
      }
      calculNbCategories(): number{
      return this.Categories.length;
      }
    listeVetements():Vetement[] {
    return this.tab_vet;
    }
    consulterVetement(id:number): Vetement{
      this.vetement = this.tab_vet.find(vet => vet.codea == id)!;
      return this.vetement;
      }
      modifierVetement(vet: Vetement) {
      this.supprimerVetement(vet);
      this.AjouterVetement(vet);
    
      }
    }
    