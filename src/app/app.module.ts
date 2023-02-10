import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { FootercomponentComponent } from './components/footercomponent/footercomponent.component';
import { HeadercomponentComponent } from './components/headercomponent/headercomponent.component';
import { PicturecomponentComponent } from './components/picturecomponent/picturecomponent.component';
import { TitlecomponentComponent } from './components/titlecomponent/titlecomponent.component';
import { ParagraphcomponentComponent } from './components/paragraphcomponent/paragraphcomponent.component';
import { FormcomponentComponent } from './components/formcomponent/formcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SectionOneComponent,
    FootercomponentComponent,
    HeadercomponentComponent,
    PicturecomponentComponent,
    TitlecomponentComponent,
    ParagraphcomponentComponent,
    FormcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
