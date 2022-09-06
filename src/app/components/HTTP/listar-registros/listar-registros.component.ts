import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.component.html',
  styleUrls: ['./listar-registros.component.css'],
  providers: [PacienteService]
})
export class ListarRegistrosComponent implements OnInit {

  public pacientes: Paciente[] = []
  private last: boolean = false

  constructor(private pacienteService: PacienteService, private router: Router) { }

  ngOnInit(): void {

    this.getLastPacientes()

  }

  getLastPacientes(){
    this.pacienteService.getPacientes(this.last).subscribe(res=>{
      if(res.paciente.length > 0){
        // Swal.fire(
        //   'Encontrados',
        //   +res.paciente.length +' Pacientes encontrados',
        //   'info'
        // )
        this.pacientes = res.paciente
      }else{
        Swal.fire(
          'Fallo!',
          'No existen pacientes para mostrar',
          'info'
        )
      }
    },
    error => {
      Swal.fire(
        'Error',
          'Error de conexion con la BD',
          'warning'
      )
    }
    )
  }





}
