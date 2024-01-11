import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Vetement } from '../model/vetements.model';
import { VetementService } from '../services/vetement.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-vetement',
  templateUrl:'./update-vetement.component.html',
  styleUrls: ['./update-vetement.component.css']
})
export class UpdateVetementComponent implements OnInit {
  vetementCourant = new Vetement();
  categories! : Categorie[];
codecModifie! : any;
  
 
  
  constructor(private activatedRoute: ActivatedRoute,private router:Router, private vetementService: VetementService) { }
   
  
  
   modifVetement(){
    this.vetementService.modifierVetement(this.vetementCourant);
    console.log("Vetement modifié avec succes : "
     +this.vetementCourant.marque+":"
     +this.vetementCourant.prix+"DT, qté="
     +this.vetementCourant.qte+", ajoutée le "+this.vetementCourant.dateAjout);
     this.router.navigate(['vetement']);
      this.vetementCourant.categ = this.vetementService.consulterCategorie
     (this.codecModifie);
      
     
    }

  ngOnInit(): void {
    this.categories = this.vetementService.listeCategories();
    this.vetementCourant = this.vetementService.consulterVetement (this.activatedRoute.snapshot.params['id']);
    console.log("Code vetement à modifier "+this.vetementCourant.codea);
    this.codecModifie = this.vetementCourant.categ.codec;
  }

}
