import { Routes } from '@angular/router';
import { BodyComponent } from './HOMEPAGE/body/body.component';
import { SignupheaderComponent } from './SIGNUP/signupheader/signupheader.component';
import { PagenotfoundComponent } from './404/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './HOMEPAGE/navbar/navbar.component';
import { Component } from '@angular/core';
import { IndibodyComponent } from './INDIVIDUALPRODUCT/indibody/indibody.component';
import { CartbodyComponent } from './CART/cartbody/cartbody.component';


export const routes: Routes = [
    { path: '', component:SignupheaderComponent,title:"CHATAPP" },
    { path: 'home', component: NavbarComponent,title :"HomePage" },
    { path : 'product/:id', component:IndibodyComponent,title:"Product"},
    { path : 'cart', component:CartbodyComponent,title:"Cart"},
    { path : '**', component: PagenotfoundComponent,title :"404 INVALID PAGE"} // put this as last only
];
