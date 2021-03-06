import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatabindComponent } from './databind/databind.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
