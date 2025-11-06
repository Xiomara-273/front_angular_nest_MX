import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil';
import { CategoriaComponent } from './inventario/components/categoria/categoria';
import { LayoutComponent } from './layout/layout';


const routes: Routes = [
 
  {
    path:"",
   component:LayoutComponent,
   children:[

  {
    path:"perfil",
    component:PerfilComponent
  },
  {
    path:"categoria",
    component:CategoriaComponent
  }
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
