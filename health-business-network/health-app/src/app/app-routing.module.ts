import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { EstudioComponent } from './Estudio/Estudio.component';
import { UniversidadComponent } from './Universidad/Universidad.component';
import { EmpleoComponent } from './Empleo/Empleo.component';
import { EmpresaComponent } from './Empresa/Empresa.component';
import { ProcedimientoQuirigicoComponent } from './ProcedimientoQuirigico/ProcedimientoQuirigico.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'Estudio', component: EstudioComponent},
		
		{ path: 'Universidad', component: UniversidadComponent},
		
		{ path: 'Empleo', component: EmpleoComponent},
		
		{ path: 'Empresa', component: EmpresaComponent},
		
		{ path: 'ProcedimientoQuirigico', component: ProcedimientoQuirigicoComponent},
		
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
