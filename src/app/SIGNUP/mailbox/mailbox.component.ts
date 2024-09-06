import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-mailbox',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterOutlet,RouterLinkActive,CommonModule],
  templateUrl: './mailbox.component.html',
  styleUrl: './mailbox.component.css'
})
export class MailboxComponent {

  @ViewChild('myform') form: NgForm | undefined;

  mailid:string = '';
  onsubmit()
  {
    this.mailid = this.form?.value.mail;
    console.log(this.mailid);

    if (this.mailid == 'prass@mail.com')
    {
      window.alert("Correct");
    }else{
      window.alert("INVALID MAIL");
    }
    console.log(this.form);
  }
}
