import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { EstudioComponent } from './Estudio/Estudio.component';
import { UniversidadComponent } from './Universidad/Universidad.component';
import { EmpleoComponent } from './Empleo/Empleo.component';
import { EmpresaComponent } from './Empresa/Empresa.component';
import { ProcedimientoQuirigicoComponent } from './ProcedimientoQuirigico/ProcedimientoQuirigico.component';

@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    EstudioComponent,
		UniversidadComponent,
		EmpleoComponent,
		EmpresaComponent,
		
    ProcedimientoQuirigicoComponent
		
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
