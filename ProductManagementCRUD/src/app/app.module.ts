import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import mat Toolbar in angular.io components API reference code
import { MatToolbarModule } from '@angular/material/toolbar';

// Import Icon in angular.io Component API reference
import { MatIconModule } from '@angular/material/icon';

// Import Button reference API 
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],

  // After import here Above Import API
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
