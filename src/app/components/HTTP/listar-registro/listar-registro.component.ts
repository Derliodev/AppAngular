import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { Global } from 'src/app/services/global';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-listar-registro',
  templateUrl: './listar-registro.component.html',
  styleUrls: ['./listar-registro.component.css'],
  providers: [PacienteService]
})
export class ListarRegistroComponent implements OnInit {
  public url: string;


  @Input() pacientes: Paciente[] = []

  public imagenDefaut: string = 'assets/default.png';

  constructor() { this.url = Global.API}

  ngOnInit(): void {

    console.log(this.pacientes)

  }


}
