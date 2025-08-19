import { Component } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any = [];

  constructor(public starwarsService: StarwarsService) {}

  buscarUsuarios() {
    this.starwarsService.getUsers().subscribe((usuarios: any) => {
      this.users = usuarios.results || [];
      this.users = usuarios.results.forEach((user: any) => {
        if (user.films) {
          user.films.forEach((filmUrl: string) => {
            this.starwarsService.getFilm(filmUrl).subscribe((film: any) => {
              console.log(film)
            })
          })
        }
      })
    });
  }
}

