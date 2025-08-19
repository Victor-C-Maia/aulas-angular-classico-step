import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-detalhes',
  standalone: false,
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css']
})
export class UsuarioDetalhesComponent implements OnInit {

  usuario: any;
  id!: string | null;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('ID recebido pela rota:', this.id);

      if (this.id) {
        this.usuarioService.getUsuarioPorId(+this.id).subscribe(data => {
          this.usuario = data;
        });
      }
    });
  }
}
