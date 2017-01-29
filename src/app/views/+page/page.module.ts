import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';

let appRoutes: Routes = [
    {
        path: '', component: PageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    declarations: [PageComponent],
    providers: [],
    entryComponents: [PageComponent]

})
export class PageModule { }
