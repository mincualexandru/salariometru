import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { DetaliiSalariuComponent } from './pages/detalii-salariu/detalii-salariu.component';
import { SalariuService } from './shared/salariu.service';
import { IstoricSalariiComponent } from './pages/istoric-salarii/istoric-salarii.component';
import { SalaryCardComponent } from './pages/salary-card/salary-card.component';
import { HeaderComponent } from './header/header.component';
import { SalaryPostComponent } from './pages/salary-post/salary-post.component';
import { FunctieComponent } from './pages/functie/functie.component';
import { PostComponent } from './Pages/post/post.component';
import { DomeniuFunctiiService } from './shared/domenii-salarii.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SalaryComponent,
    DetaliiSalariuComponent,
    IstoricSalariiComponent,
    SalaryCardComponent,
    HeaderComponent,
    SalaryPostComponent,
    FunctieComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DomeniuFunctiiService, SalariuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
