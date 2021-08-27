import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxieCardComponent } from './axie-card/axie-card.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AxieMockService } from './shared/axie-mock.service';

@NgModule({
  declarations: [
    AppComponent,
    AxieCardComponent,
    DropdownComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [
    AxieMockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
