import { LoginComponent } from './views/login/login.component';
import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  {
    path: 'app', component: ContentComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'home', loadChildren: 'app/views/+home/home.module#HomeModule' },
      { path: 'page', loadChildren: 'app/views/+page/page.module#PageModule' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
