import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './appRouterModule.module';
import { SigningUpComponent } from './signing-up/signing-up.component';
import { MypipPipe } from './mypip.pipe';
import { myService } from './myservice.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    SigningUpComponent,
    MypipPipe,
    SignInComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
