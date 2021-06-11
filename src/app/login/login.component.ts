import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Client } from '../client';
import { CompteService } from '../compte.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public client! : Client
  constructor(private compteService : CompteService,private router : Router) { }

  ngOnInit(): void {
    let myLocalstorage = localStorage.getItem("currentAgent");
    if(myLocalstorage){
        this.router.navigate(['']);
    }
  }

  
  public onLogin(loginxform: NgForm){
    let client : Client = loginxform.value;
    console.log(client);
    let a = this.compteService.loginClient(client).subscribe(
      (response:Client) => {
      if(response){
        console.log("user founded");
        this.client = response;
        localStorage.setItem("currentClient",this.client.id_client);
        localStorage.setItem("emailClient",this.client.email);
        localStorage.setItem("telClient",this.client.tel);
        localStorage.setItem("cinClient",this.client.cin);
        localStorage.setItem("mdpClient",this.client.mdp);
        localStorage.setItem("nomClient",this.client.nom + " " + this.client.prenom);
        this.router.navigate(['home']);
        console.log("not found");
      }
      console.log(response)},
      (err : HttpErrorResponse) => {
        console.log (err)});
  }


}
