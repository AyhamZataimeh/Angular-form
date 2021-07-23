import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SigningUpComponent } from "./signing-up/signing-up.component";
import { UsersComponent } from "./users/users.component";

const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'signing-up',component:SigningUpComponent},
    {path:'sign-in',component:SignInComponent},
    {path:'users',component:UsersComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouterModule{

}