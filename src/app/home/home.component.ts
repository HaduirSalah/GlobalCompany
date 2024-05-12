import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ClientsComponent } from '../clients/clients.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';
import { ServicesComponent } from '../services/services.component';
import { ValuesComponent } from '../values/values.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ValuesComponent,NavComponent,ClientsComponent,ServicesComponent,ContactUsComponent,AboutUsComponent,HomeComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
