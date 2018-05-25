import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsultaComponent} from './views/consulta/consulta.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'consulta', pathMatch: 'full' },
  {path: 'consulta', component: ConsultaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
