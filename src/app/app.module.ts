import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnnonceItemComponent } from './components/annonces-page/annonce-item/annonce-item.component';
import { AnnoncesComponent } from './components/annonces-page/annonces/annonces.component';
import { ListServiceComponent } from './components/services-page/services-divers/list-service/list-service.component';
import { FormServiceComponent } from './components/services-page/services-divers/form-service/form-service.component';
import { SearchBarComponent } from './components/services-page/services-divers/search-bar/search-bar.component';
import { FormConventionComponent } from './components/services-page/conventions/form-convention/form-convention.component';
import { SearchBarConventionComponent } from './components/services-page/conventions/search-bar/search-bar.component';
import { ListConventionsComponent } from './components/services-page/conventions/list-conventions/list-conventions.component';
import { InformationPageComponent } from './components/information-page/information-page.component';
import { ListDemandeComponent } from './components/services-page/demande-service/list-demande.component';
import { SingleAnnonceComponent } from './components/annonces-page/single-annonce/single-annonce.component';
import { CredentialsComponent } from './components/credentials/credentials.component';
import { LoginComponent } from './components/credentials/login/login.component';
import { CneDateComponent } from './components/credentials/cne-date/cne-date.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ConventionPdfTemplateComponent } from './components/services-page/conventions/list-conventions/convention-pdf-template/convention-pdf-template.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnnonceItemComponent,
    AnnoncesComponent,
    ListServiceComponent,
    FormServiceComponent,
    SearchBarComponent,
    FormConventionComponent,
    SearchBarConventionComponent,
    ListConventionsComponent,
    InformationPageComponent,
    ListDemandeComponent,
    SingleAnnonceComponent,
    ConventionPdfTemplateComponent,
    CredentialsComponent,
    LoginComponent,
    CneDateComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
