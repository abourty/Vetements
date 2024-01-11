import { Component, OnInit } from '@angular/core';
import { VetementService } from '../services/vetement.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbVet = 0;
  nbCateg = 0;
  totalStock = 0;
  nbUsers = 0;
  constructor(private vetServ : VetementService , private authServ:AuthService) {
    this.nbVet = this.vetServ.calculNbVetements();
    this.nbCateg = this.vetServ.calculNbCategories();
    this.totalStock = this.vetServ.calculTotalStock();
    this.nbUsers = this.authServ.calculNbUsers();
   }

  ngOnInit(): void { 
  }

}
