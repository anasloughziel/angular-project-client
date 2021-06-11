import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Client} from '../client';

import { ActivatedRoute, Router } from '@angular/router';

import { CompteService } from "../compte.service";
import { objectVersement } from '../objectVersement';





@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  public client!: Client
  public id = ""
  nom:string  = " "
  email:string  = " "
  tel:string  = " "
  cin:string  = " "
  mdp:string = " "
  public ver!:objectVersement

  constructor(private route: ActivatedRoute,private router: Router, private compteService: CompteService) { }

  ngOnInit(): void{
   // this.client = new Client();\
   let currentClient = localStorage.getItem('currentClient')!
   let id = 'gg';

   let emailClient = localStorage.getItem('emailClient')!
   this.email = emailClient;
   let telClient = localStorage.getItem('telClient')!
   this.tel = telClient;
   let cinClient = localStorage.getItem('cinClient')!
   this.cin = cinClient;
   let nomClient = localStorage.getItem('nomClient')!
   this.nom = nomClient;
   let mdpClient = localStorage.getItem('mdpClient')!
   this.mdp = mdpClient;

    //this.id = this.route.snapshot.params['id'];
    /*
    this.compteService.getClient(id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));*/
  }

  
    
  updateEmployee(loginxform:NgForm) {

    this.compteService.updateEmployee(loginxform.value)
      .subscribe(data => {
        console.log(data);
        this.client = data as Client;
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(loginxform:NgForm) {
    this.updateEmployee(loginxform.value);

  }

  gotoList() {
    this.router.navigate(['/clients']);
  }

}
