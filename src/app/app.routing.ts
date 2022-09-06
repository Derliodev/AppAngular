import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule} from '@angular/router'

import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";
import { NuevoregistroComponent } from "./components/HTTP/nuevoregistro/nuevoregistro.component";

import { BuscarRegistroComponent } from "./components/HTTP/buscar-registro/buscar-registro.component";
import { BusquedaRegistroComponent } from "./components/HTTP/busqueda-registro/busqueda-registro.component";

import { DetalleRegistroComponent } from "./components/HTTP/detalle-registro/detalle-registro.component";
import { ActualizarRegistroComponent } from "./components/HTTP/actualizar-registro/actualizar-registro.component";

import { ListarRegistroComponent } from "./components/HTTP/listar-registro/listar-registro.component";
import { ListarRegistrosComponent } from "./components/HTTP/listar-registros/listar-registros.component";

const appRoutes: Routes = [

  {path: '', component: HomeComponent}, // OK
  {path: 'home', component: HomeComponent}, // OK
  {path: 'registro/nuevo', component: NuevoregistroComponent}, // OK
  {path: 'registro/actualizar/:id', component: ActualizarRegistroComponent},
  {path: 'registro/detalle/:id', component: DetalleRegistroComponent},
  {path: 'registro/buscar', component: BuscarRegistroComponent},
  {path: 'registro/busqueda/:search', component: BusquedaRegistroComponent},
  {path: 'registro/listar', component: ListarRegistroComponent},// Recibe para imprimir el registro por detalle
  {path: 'registro/listar-todos', component: ListarRegistrosComponent},// OK
  {path: '**', component: ErrorComponent}

];

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
