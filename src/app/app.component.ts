import { ClientsComponent } from './clients/clients.component';
import { NavComponent } from './nav/nav.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ValuesComponent } from './values/values.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ValuesComponent,NavComponent,ClientsComponent,ServicesComponent,ContactUsComponent,AboutUsComponent,HomeComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GlobalCompany';
}
