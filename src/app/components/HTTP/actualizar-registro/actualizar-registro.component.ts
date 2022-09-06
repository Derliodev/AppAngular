import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-registro',
  templateUrl: './actualizar-registro.component.html',
  styleUrls: ['./actualizar-registro.component.css']
})
export class ActualizarRegistroComponent implements OnInit {

  public paciente: Paciente;
  public status: string;
  public update: boolean;
  public url: string;
  public fecha: Date = new Date();


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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteSvice: PacienteService
  ) {

    this.status = '';
    this.paciente = new Paciente('', '', 0, '', '', this.fecha, '', false);
    this.update = true;
    this.url = Global.API;

  }

  ngOnInit(): void {
    this.getUserById()
  }

  getUserById() {
    this.route.params.subscribe(params => {
      let id = params['id']
      this.pacienteSvice.getPaciente(id).subscribe(res => {
        if (res.paciente) {
          this.paciente = res.paciente
        } else {
          console.log('error')
        }
      }, error => {
        console.log('error')
      })
    })
  }

  onSubmit() {
    this.pacienteSvice.updatePacienteById(this.paciente._id, this.paciente).subscribe(
      (res) => {
        if(res){
          this.status = 'success';
          Swal.fire(
            'Modificado',
            'Paciente modificado',
            'success'
          ).then(()=>{
            this.router.navigate(['registro/listar-todos']);
          })
        }else{
          this.status = 'error'
        }
      }, error => {
        this.status = 'error'
      })
  }

  uploadFile(data: any) {
    let file = data.body.tempFilename;
    this.paciente.fotoPersonal = file;
  }



}
