import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from './components/producto/producto';
import { Categoria } from './components/categoria/categoria';



@NgModule({
  declarations: [
    Producto,
    Categoria
  ],
  imports: [
    CommonModule
  ]
})
export class InventarioModule { }
