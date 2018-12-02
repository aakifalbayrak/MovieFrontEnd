import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//Create component objects for pages
import { CreateComponent } from './create/create.component';
import { MoviesComponent } from './movies/movies.component';

//Define the path for each page
let routes: any = [
    { path: "", component: MoviesComponent },
    { path: "create", component: CreateComponent }
];

@NgModule({
    declarations: [
    AppComponent,
        CreateComponent,
        MoviesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
