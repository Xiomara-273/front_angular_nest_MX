import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Perfil } from './components/perfil/perfil';
import { Cliente } from './components/cliente/cliente';


@NgModule({
  declarations: [
    Perfil,
    Cliente
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
