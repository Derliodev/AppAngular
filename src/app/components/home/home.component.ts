import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[PacienteService]
})
export class HomeComponent implements OnInit {

  public pacientes: Paciente[] = []
  private last: boolean = true
  public header: string = "Mantenedor de Registros"

  constructor(private pacienteService: PacienteService) { }

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
