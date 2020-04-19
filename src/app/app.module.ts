import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Serices
import { TeamService } from './services/team.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { ContactComponent } from './components/contact/contact.component';
import { WorksComponent } from './components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    OurTeamComponent,
    NavbarComponent,
    ContactComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
