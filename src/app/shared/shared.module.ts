import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],
    providers: [],
    exports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule
    ]
})
export class SharedModule { }
