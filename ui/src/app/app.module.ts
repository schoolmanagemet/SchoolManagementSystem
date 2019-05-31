import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent, popup } from './frontend/frontend.component';
import { MatCardModule, MatButtonModule, MatDialogModule, MatDialogActions, MatFormFieldModule, MatDividerModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from "@agm/core";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    popup,
    LoginComponent
  ],
  entryComponents: [popup],
  imports: [

    BrowserAnimationsModule,
    BrowserModule,
    
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBscOlAy5I1y_LQfnHYxPafZi5Lo0QoK9I'
    }),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
