import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

let appRoutes: Routes = [
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
})
export class HomeModule { }
