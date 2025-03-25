import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceFormComponent } from './components/resource-form/resource-form.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: ResourceListComponent },
  { path: 'resources/create', component: ResourceFormComponent },
  { path: 'resources/edit/:id', component: ResourceFormComponent }
];
