import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-busqueda-registro',
  templateUrl: './busqueda-registro.component.html',
  styleUrls: ['./busqueda-registro.component.css'],
  providers: [PacienteService]
})
export class BusquedaRegistroComponent implements OnInit {

  public paciente: Paciente[] = []
  public search: string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService
  ) {
   }

  ngOnInit(): void {
    this.byField()
  }

  byField(){
    this.route.params.subscribe(params=>{
      var search = params['search']
      this.search = search

      this.pacienteService.searchUserByField(search).subscribe(res=>{
        if(res.pacientes){
          this.paciente=res.pacientes
        }else{
          console.log('error')
          this.paciente= []
        }
      }, error=>{
        console.log(error)
        this.paciente= []
      })
    })
  }

}
