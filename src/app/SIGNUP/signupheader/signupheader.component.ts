import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLinkActive,RouterLink,RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-signupheader',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet, RouterLink, RouterLinkActive,RouterModule],
  templateUrl: './signupheader.component.html',
  styleUrl: './signupheader.component.css'
})
export class SignupheaderComponent {

  @ViewChild('myform') form: NgForm | undefined;

  password:string= "";
  showpassword:boolean = false;


  constructor(private router: Router) { }


  onsubmit = () =>
  {
    this.password = this.form?.value.pass;
    console.log("FOrm Submitted !");
    console.log(this.form?.value.name);
    console.log(this.form?.value.uname);
    console.log(this.form?.value.pass);
    console.log(this.form?.value.dob);
    console.log(this.form?.value.gender);


    this.router.navigate(['/home']);
  
  }

  toggleshowpass = () =>
  {
    if(this.showpassword == false)
    {
      this.showpassword = true;
    }else{
      this.showpassword = false;
    }
  }
}
