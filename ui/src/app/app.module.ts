import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent, popup } from './frontend/frontend.component';
import { MatCardModule, MatButtonModule, MatDialogModule, MatDialogActions, MatFormFieldModule, MatDividerModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    popup
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

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
