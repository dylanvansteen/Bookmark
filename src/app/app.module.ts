import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { SharedModule } from './shared';
import { SideNavigationComponent } from './views/shared';
import { LoginComponent } from './views/login/login.component';
// import { AuthGuard } from './guards/auth-gaurd';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  {
    path: 'app', component: ContentComponent, 
    // canActivate: [AuthGuard],
     children: [
      { path: 'home', loadChildren: "app/views/+home/home.module#HomeModule" },
      { path: 'page', loadChildren: 'app/views/+page/page.module#PageModule' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideNavigationComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
