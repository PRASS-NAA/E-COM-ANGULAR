import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './LOGIN/header/header.component';
import { SignupheaderComponent } from './SIGNUP/signupheader/signupheader.component';
import { MailboxComponent } from './SIGNUP/mailbox/mailbox.component';
import { NavbarComponent } from './HOMEPAGE/navbar/navbar.component';
import { BodyComponent } from './HOMEPAGE/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SignupheaderComponent,MailboxComponent,NavbarComponent,BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatapp';
}
