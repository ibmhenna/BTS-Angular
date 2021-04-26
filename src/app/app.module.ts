import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EllipsisPipe} from './Ellipse';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatebugformComponent } from './createbugform/createbugform.component';
import { SearchbugformComponent } from './searchbugform/searchbugform.component';
import { ViewallbugsComponent } from './viewallbugs/viewallbugs.component';
import { HomeComponent } from './home/home.component';
import { UpdatebugformComponent } from './updatebugform/updatebugform.component';

// router declaration
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },//default, Home page
  { path: 'createbugform', component: CreatebugformComponent },
  { path: 'searchbugform', component: SearchbugformComponent },
  { path: 'updatebugform', component: UpdatebugformComponent },
  { path: 'viewallbugs', component: ViewallbugsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatebugformComponent,
    SearchbugformComponent,
    ViewallbugsComponent,
    HomeComponent,
    UpdatebugformComponent,
    EllipsisPipe,
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
