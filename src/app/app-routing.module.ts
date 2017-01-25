import { LoginComponent } from './views/login/login.component';
import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  {
    path: 'app', component: ContentComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'home', loadChildren: 'app/views/+home/home.module#HomeModule' },
      // { path: 'page', loadChildren: PageModule }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
