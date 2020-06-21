import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MainLayoutComponent } from "./pages/main-layout/main-layout.component";
import { DetaliiSalariuComponent } from './pages/detalii-salariu/detalii-salariu.component';
import { IstoricSalariiComponent } from './pages/istoric-salarii/istoric-salarii.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { SalaryPostComponent } from './pages/salary-post/salary-post.component';
import { PostComponent } from './Pages/post/post.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: SalaryComponent
      }, 
      {
        path: "istoric-salarii",
        component: IstoricSalariiComponent
      },
      {
        path: "salarii-post",
        component: SalaryPostComponent,
        children: [
          {
            path: ":domeniu/:post",
            component: PostComponent
          }
        ]
      }
    ]
  },
  {
    path: "detalii-salariu",
    component: DetaliiSalariuComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
