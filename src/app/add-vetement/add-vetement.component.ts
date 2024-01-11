import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetements.model';
import { VetementService } from '../services/vetement.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  styleUrls: ['./add-vetement.component.css']
})
export class AddVetementComponent implements OnInit {
  newVetement = new Vetement();
  categories! : Categorie[];
  newCodec! : number;
  newCateg! : Categorie;
 
  constructor(private router :Router, private vetementService: VetementService )
  { }
  addVetements(){
  this.newCateg = this.vetementService.consulterCategorie(this.newCodec);
  this.newVetement.categ = this.newCateg;
  this.vetementService.AjouterVetement(this.newVetement);
  console.log(this.newVetement);
  this.router.navigate(['vetements']);
  }
  ngOnInit(): void {
  this.categories = this.vetementService.listeCategories();
  }
  }

