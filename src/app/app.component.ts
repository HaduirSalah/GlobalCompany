import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValuesComponent } from './values/values.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ValuesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GlobalCompany';
}
