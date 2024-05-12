import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { DownloadCompanyProfileComponent } from './download-company-profile/download-company-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ValuesComponent } from './values/values.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent, title: 'Global Company - Services' },
  { path: 'clients', component: ClientsComponent, title: 'Global Company - Clients' },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'values', component: ValuesComponent },
  { path: 'download', component: DownloadCompanyProfileComponent },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
