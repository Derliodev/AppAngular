import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { PacienteService } from './services/paciente.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NuevoregistroComponent } from './components/HTTP/nuevoregistro/nuevoregistro.component';
import { ActualizarRegistroComponent } from './components/HTTP/actualizar-registro/actualizar-registro.component';
import { DetalleRegistroComponent } from './components/HTTP/detalle-registro/detalle-registro.component';
import { BuscarRegistroComponent } from './components/HTTP/buscar-registro/buscar-registro.component';
import { BusquedaRegistroComponent } from './components/HTTP/busqueda-registro/busqueda-registro.component';
import { ListarRegistroComponent } from './components/HTTP/listar-registro/listar-registro.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ListarRegistrosComponent } from './components/HTTP/listar-registros/listar-registros.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NavbarComponent,
    NuevoregistroComponent,
    ActualizarRegistroComponent,
    DetalleRegistroComponent,
    BuscarRegistroComponent,
    BusquedaRegistroComponent,
    ListarRegistroComponent,
    ListarRegistrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFileUploaderModule,
    routing
  ],
  providers: [appRoutingProviders, PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
