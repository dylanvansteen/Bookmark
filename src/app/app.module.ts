import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { HomeComponent } from './views/+home/home.component';
import { SharedModule } from './shared';
import { SideNavigationComponent } from './views/shared';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  {
    path: 'app', component: ContentComponent, children: [
      { path: 'home', loadChildren: 'app/views/+home/home.module#HomeModule'  },
      { path: 'page', loadChildren: 'app/views/+page/page.module#PageModule'  }
    ]
  }
];
 
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideNavigationComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
