import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { HomeDevelopersComponent } from './components/home-developers/home-developers.component';
import { ListDevelopersComponent } from './components/list-developers/list-developers.component';
import { DevelopersRoutingModule } from './developers-routing.module';
import { CardDeveloperComponent } from './components/card-developer/card-developer.component';


@NgModule({
  declarations: [
    HomeDevelopersComponent,
    ListDevelopersComponent,
    CardDeveloperComponent
  ],
  imports: [
    CommonModule,
    DevelopersRoutingModule,
    SharedModule,
    FormsRoutingModule
  ]
})
export class DevelopersModule { }
