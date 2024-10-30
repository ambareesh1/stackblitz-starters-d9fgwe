import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-appcomponent-component',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HomeComponent],
  templateUrl: './appcomponent-component.component.html',
  styleUrl: './appcomponent-component.component.css'
})
export class AppcomponentComponentComponent {

}
