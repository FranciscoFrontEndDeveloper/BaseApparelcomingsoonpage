import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { FootercomponentComponent } from './components/footercomponent/footercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SectionOneComponent,
    FootercomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
