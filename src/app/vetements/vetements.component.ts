import { Component, OnInit } from '@angular/core';
import {Vetement} from '../model/vetements.model';
import { VetementService } from '../services/vetement.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-vetement',
  templateUrl: './vetements.component.html',
  styleUrls: ['./vetements.component.css']
})
export class VetementComponent implements OnInit {
  tab_vet : Vetement[];
  vetement! : Vetement;
  zeroStyle = {'color':'blue'};
 
  suppVetement(vet: Vetement) {
      let conf = confirm("Etes-vous sûr de vouloir supprimer cet vetement ?");
    if (conf) {
      this.vetementService.supprimerVetement(vet);
      console.log("Suppression avec succes :"+vet.marque);
      }
     }
     constructor(private vetementService: VetementService , public authServ : AuthService ) {
      this.tab_vet = vetementService.listeVetements();
      }
  ngOnInit(): void {
  }

}
