import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AlertModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {InputTextModule} from 'primeng/primeng';
import {UserService} from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , HttpModule
    , AlertModule.forRoot()
    , InputTextModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
