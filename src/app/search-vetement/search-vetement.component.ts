import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetements.model';
import { VetementService } from '../services/vetement.service';
import { Categorie } from '../model/categorie.model';
@Component({
  selector: 'app-search-vetement',
  templateUrl: './search-vetement.component.html',
  styleUrls: ['./search-vetement.component.css']
})
export class SearchVetementComponent implements OnInit {
  vetement! : Vetement[];
  marVetement! : string;
  categRech! : number;
  categories! : Categorie[];
  critere! : string;
  constructor(private vetementService: VetementService ) {
    this.vetement = vetementService.listeVetements();
    }
    chercherParMar(Mar : string){
      this.vetement = this.vetementService.listeVetements();
      this.vetement = this.vetement.filter(vet => vet.marque.toLowerCase().includes(Mar.toLowerCase()));
      }

      chercherParCateg() {
        this.vetement = this.vetementService.listeVetements();
        this.vetement = this.vetement.filter(vet => vet.categ.codec == this.categRech);
        }
        chercherParCode(code : string){
          this.vetement = this.vetementService.listeVetements();
          this.vetement = this.vetement.filter(vet => vet.codea!.toString()==code);}
        reset(){
        this.vetement = this.vetementService.listeVetements();
        }

  ngOnInit(): void {
    this.categories = this.vetementService.listeCategories();
  }

}
