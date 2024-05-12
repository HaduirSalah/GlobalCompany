import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  selectedLanguage: string = 'English';

  constructor() { }

  changeLanguage(lang: string): void {
    this.selectedLanguage = lang;
    // Optionally, you can perform other actions based on the selected language
  }


  ngOnInit(): void {

  }


}
