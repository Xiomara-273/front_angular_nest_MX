
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Perfil } from './components/perfil/perfil';
import { Categoria } from './inventario/components/categoria/categoria';
import { Layout } from './layout/layout';

const routes: Routes = [
  {
    path: '',
    component: Layout, 
    children: [        
      {
        path: 'perfil',
        component: Perfil
      },
      {
        path: 'categoria',
        component: Categoria
      },
      
      
      {
        path: '',
        redirectTo: 'perfil', 
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }