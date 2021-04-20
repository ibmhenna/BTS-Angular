import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatebugformComponent } from './createbugform/createbugform.component';
import { SearchbugformComponent } from './searchbugform/searchbugform.component';

import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', component: CreatebugformComponent }, //default, Home page
  { path: 'Search bug', component: SearchbugformComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatebugformComponent,
    SearchbugformComponent,
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  ),
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
