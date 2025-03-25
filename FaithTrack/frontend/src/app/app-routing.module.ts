// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceFormComponent } from './components/resource-form/resource-form.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/resources', pathMatch: 'full' },
  { path: 'resources', component: ResourceListComponent },
  { path: 'resources/new', component: ResourceFormComponent },
  { path: 'resources/:id/edit', component: ResourceFormComponent },
  { path: 'resources/:id', component: ResourceDetailsComponent },
  { path: '', component: ResourceListComponent },
  { path: 'create', component: ResourceFormComponent },
  { path: 'edit/:id', component: ResourceFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
