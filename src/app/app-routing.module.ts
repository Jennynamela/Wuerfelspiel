import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './features/start/start.component';
import { SpielComponent } from './features/spiel/spiel.component';
import { spielGuard } from './services/spiel.guard';

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'spiel', canActivate:[spielGuard], component: SpielComponent},
  {path: '**', redirectTo: '/start', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
