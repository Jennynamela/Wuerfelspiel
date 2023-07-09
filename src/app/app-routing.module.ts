import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './features/start/start.component';
import { SpielComponent } from './features/spiel/spiel.component';
import { spielGuard } from './services/spiel.guard';
import { winLostGuard } from './services/win-lost.guard';
import { WinComponent } from './features/win/win.component';
import { LostComponent } from './features/lost/lost.component';

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'spiel', canActivate:[spielGuard], component: SpielComponent},
  {path: 'win', canActivate:[winLostGuard], component: WinComponent},
  {path: 'lost', canActivate:[winLostGuard], component: LostComponent},
  {path: '**', redirectTo: '/start', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
