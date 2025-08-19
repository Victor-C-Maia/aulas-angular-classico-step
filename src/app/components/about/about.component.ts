import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  users: any;
  constructor(public jsonplaceholderService: JsonplaceholderService) {}

  buscarUsuarios() {
    this.jsonplaceholderService.getUsers().subscribe((users: any) => {return (this.users = users)});
  }
}
