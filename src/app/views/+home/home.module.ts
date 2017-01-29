import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    {
        path: '', component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    declarations: [HomeComponent],
    providers: [],
    entryComponents: [HomeComponent]
})
export class HomeModule { }
