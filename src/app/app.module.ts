import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemMcaComponent } from './item-mca/item-mca.component';
import { FooterComponent } from './footer/footer.component';
import { InsideMcaComponent } from './inside-mca/inside-mca.component';
import { DataMcaComponent } from './data-mca/data-mca.component';
import { InsideMcaMachineComponent } from './inside-mca-machine/inside-mca-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemMcaComponent,
    FooterComponent,
    InsideMcaComponent,
    DataMcaComponent,
    InsideMcaMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
