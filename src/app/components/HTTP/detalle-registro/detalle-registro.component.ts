import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.component.html',
  styleUrls: ['./detalle-registro.component.css']
})
export class DetalleRegistroComponent implements OnInit {

  public paciente: Paciente
  public url: string
  public imgDefault: string = 'assets/default.png';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService
  ) {
    this.url = Global.API
    this.paciente = new Paciente('', '',  0,  '',  '',  new Date(),  '', false);
  }

  ngOnInit(): void {
    this.getUserById()
  }

  getUserById(){
    this.route.params.subscribe(params=>{
      let id = params['id']
      this.pacienteService.getPaciente(id).subscribe(res=>{
        if(res.paciente){
          this.paciente = res.paciente
        }else{
          console.log('error')
        }
      }, error=>{
        console.log('error')
      })
    })
  }

  deletePacienteById(id:string){
    this.pacienteService.deletePacienteById(id).subscribe(res=>{
      if(res.status == 'succes'){
        Swal.fire(
           'Eliminado',
           'Pacientes id:' + this.paciente._id + ' Eliminado correctamente',
           'warning'
        ).then(()=>{
          this.router.navigate(['/registro/listar-todos'])
        })
      }
    }, error=>{
      Swal.fire(
        'Error',
        'No se pudo eliminar al paciente',
        'error'
     ).then(()=>{
       this.router.navigate(['/registro/listar-todos'])
     })
    })
  }

}
