import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LayoutComponent } from './layout/layout.component';
import { CategoriaComponent } from './inventario/components/categoria/categoria.component';

@NgModule({
  declarations: [
    PerfilComponent,
    ClienteComponent,
    LayoutComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
