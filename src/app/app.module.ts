import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { HomeComponent } from './views/+home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './guards/auth-gaurd';
import { SideNavigationComponent } from './views/shared/side-navigation.component';
import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from './views/register/register.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  {
    path: 'app', component: ContentComponent, canActivate: [AuthGuard], children: [
      { path: 'home', loadChildren: 'app/views/+home/home.module#HomeModule' },
      { path: 'page', loadChildren: 'app/views/+page/page.module#PageModule' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LoginComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideNavigationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
