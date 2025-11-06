import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

private http=inject(HttpClient)

loginForm=new FormGroup({
  email:new FormControl("",[Validators.email, Validators.required]),
  password: new FormControl("", Validators.required)
})

funIngresar(){
  this.http.get("http:/jsonplaceholder.typicode.com/todos/1").subscribe(
    (res)=>{
      console.log(res)
    },
    (error)=>{
      console.log(error)
    }
  )
  //alert("Ingresando..")
}
}
