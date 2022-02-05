import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadFormComponent } from './head-form/head-form.component';
import { FootOptionsComponent } from './foot-options/foot-options.component';

@NgModule({
    declarations: [
        AppComponent,
        HeadFormComponent,
        FootOptionsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
