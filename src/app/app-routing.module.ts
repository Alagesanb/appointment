import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../../src/app/home/home.component';
import { HeaderComponent} from '../../src/app/header/header.component';
import { AppointmentComponent} from '../../src/app/appointment/appointment.component';
import { WalkinComponent} from '../../src/app/walkin/walkin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'walk-in', component: WalkinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
