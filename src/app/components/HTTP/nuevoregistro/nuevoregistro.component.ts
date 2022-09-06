import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevoregistro',
  templateUrl: './nuevoregistro.component.html',
  styleUrls: ['./nuevoregistro.component.css']
})
export class NuevoregistroComponent implements OnInit {

  public paciente: Paciente;
  public header: string;
  public status: string;

  public fecha: Date = new Date(); // Manejar fecha por input

  constructor(private pacienteServ: PacienteService, private router: Router, private route: ActivatedRoute) {

    this.status = '';
    this.paciente = new Paciente('', '',  0,  '',  '',  this.fecha,  '', false);
    this.header = 'Nuevo paciente';

  }

  ngOnInit(): void {  }

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    maxSize: 100, // Maximo de tamaño del archivo
    uploadAPI: {
      url: Global.API + '/paciente/photo',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: false,
    attachPinText: 'Upload file',

  }


  onSubmit(){

    if(!this.paciente.nombre){
      this.alertaError('Nombre');
    }else if(!this.paciente.edad){
      this.alertaError('Edad');
    }else{

      this.pacienteServ.agregarPaciente(this.paciente).subscribe(
        (res) => {
          if (res.status == 'Paciente guardado exitosamente') {
            this.status = 'Paciente ' +this.paciente.nombre + ' guardado exitosamente';
            //this.paciente = res.Paciente;
            let mensaje = this.status;
            Swal.fire(
              'Agregado',
              mensaje,
              'success'
            ).then(()=>{
              this.router.navigate(['registro/listar-todos']);
            })
          } else {
            this.status = 'error';
          }
        },
        (error) => {
          this.status = error;
          let mensaje = error.error.message;
          Swal.fire(
            'Error',
            mensaje,
            'error'
          )
        }
      )
    }

  }

  uploadFile(data: any) {
    let file = data.body.tempFilename;
    this.paciente.fotoPersonal = file;
  }

  alertaError(argument:string){
    Swal.fire(
      'Error',
      argument +' es obligatoria',
      'error'
    );
    return true
  }

}
