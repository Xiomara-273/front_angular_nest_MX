import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { Auth } from '../../services/auth';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private authService = inject(Auth)
  private http = inject(HttpClient)

  loginForm = new FormGroup({
    email: new FormControl("adminqmail.com", [Validators.email, Validators.required]),
    password: new FormControl("admin1234", Validators.required)
  })

  funIngresar() {
    console.log('✅ funIngresar() se está ejecutando'); // <- Agregado para depuración

    this.authService.loginConNest(this.loginForm.value).subscribe(
      (res: any) => {
        console.log('Respuesta completa:', res);
        
        if (res.token) {
          try {
            const decodedToken = jwtDecode(res.token);
            console.log('🔓 Token decodificado:', decodedToken);
            
            localStorage.setItem('token', res.token);
            console.log('✅ Token guardado en localStorage');
            
          } catch (error) {
            console.error('❌ Error decodificando token:', error);
          }
        } else {
          console.warn('⚠️ No se recibió token en la respuesta');
        }
      },
      (error) => {
        console.log('❌ Error en login:', error);
      }
    );
  }
}