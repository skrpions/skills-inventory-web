import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDevelopersComponent } from './components/home-developers/home-developers.component';
import { ListDevelopersComponent } from './components/list-developers/list-developers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDevelopersComponent,
    children:
    [

      // Rutas Dinámicas
      { path: '', component: ListDevelopersComponent },
      /* { path: ':Especie/:id', component: DetailAnimalComponent },
      { path: ':Especie/edit-animal/:id', component: EditAnimalComponent },
      { path: ':Especie/events-animal/:id', component: EventsAnimalesComponent },
      { path: ':Especie/registrar-event/:id', component: RegistrarEventoComponent },
      { path: ':Especie/historial/:id', component: HistorialAnimalComponent }, */

      // Rutas Estáticas
      //{ path: 'compra', component: CompraAnimalesComponent },

      /* { path: 'Bovino', component: ListAnimalesComponent },
      { path: 'Bovino/:id', component: DetailAnimalComponent },
      { path: 'Bovino/edit-animal/:id', component: EditAnimalComponent },
      { path: 'Bovino/events-animal/:id', component: EventsAnimalesComponent },
      { path: 'Bovino/registrar-event/:id', component: RegistrarEventoComponent },
      { path: 'Bovino/historial/:id', component: HistorialAnimalComponent }, */


      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopersRoutingModule { }
