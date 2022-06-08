import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataMcaComponent } from './data-mca/data-mca.component';
import { HomeComponent } from './home/home.component';
import { InsideMcaMachineComponent } from './inside-mca-machine/inside-mca-machine.component';
import { InsideMcaComponent } from './inside-mca/inside-mca.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view/1', component: InsideMcaComponent },
  { path: 'view/2', component: InsideMcaMachineComponent },
  { path: 'data/1', component: DataMcaComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
