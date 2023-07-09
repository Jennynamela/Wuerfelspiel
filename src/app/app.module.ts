import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './features/start/start.component';
import { SpielComponent } from './features/spiel/spiel.component';
import { HttpClientModule } from '@angular/common/http';
import { WinComponent } from './features/win/win.component';
import { LostComponent } from './features/lost/lost.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SpielComponent,
    WinComponent,
    LostComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RadioButtonModule ,
    InputTextModule,
    RippleModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
