import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Global } from './global';
import { Paciente } from "../models/paciente";

@Injectable()
export class PacienteService {
  public urlAPI: string;

  constructor(
    private http: HttpClient
  ) {
    this.urlAPI = Global.API;
  }

  //Crud del servicio de la API

  //Agregar paciente
  agregarPaciente(paciente: Paciente): Observable<any> {
    let params = JSON.stringify(paciente)
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.urlAPI + 'paciente/', params, { headers: headers })
  }

  // Actualizar Paciente
  updatePacienteById(id: String, paciente: any) {

    let data = {
      'rut': paciente.rut,
      'nombre': paciente.nombre,
      'edad': ''+paciente.edad,
      'sexo': paciente.sexo,
      'fotoPersonal': paciente.fotoPersonal,
      'enfermedad': paciente.enfermedad
    }

    let params = JSON.stringify(data)
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    return this.http.put(this.urlAPI + 'paciente/' + id, params, { headers: headers })
  }

  // Eliminar Paciente
  deletePacienteById(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    return this.http.delete(this.urlAPI + '/paciente/' + id, { headers: headers })
  }

  // Obtener Pacientes
  getPacientes(last: boolean): Observable<any> {
    var u = 'pacientes/'
    if (last) {
      var u = 'pacientes/:last'
    }

    return this.http.get(this.urlAPI + u)
  }

  // Obtener Paciente
  getPaciente(id:any):Observable<any>{
    return this.http.get(this.urlAPI+'paciente/'+id)
  }

  // Busqueda perzonalizada
  searchUserByField(search:any):Observable<any>{
    return this.http.get(this.urlAPI+'/paciente/personalizada/'+search)
  }




}
