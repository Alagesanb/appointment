import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { WalkinComponent } from './walkin/walkin.component';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AppointmentComponent,
    WalkinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TabsetConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
