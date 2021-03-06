import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario:Usuario;
  token:string;
  constructor(public http: HttpClient) { 
    this.cargarStorge();
    console.log('Servicio Listo');
}
estaLogueado()
{
  return (this.token.length>5)? true: false;
}
crearUsuario(usuario:Usuario)
{
  let url= URL_SERVICIOS+'/usuario';
  return this.http.post (url,usuario).pipe(map((resp: any)=>
    {
      Swal.fire ('Importante','Te has Registrado Correctamente','success');
      return resp.usuario;
    }));
  
}
cargarStorge()
{
  if (localStorage.getItem('token'))
  {
    this.token = localStorage.getItem('token');
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }
  else
  {
    this.token="";
    this.usuario=null;
  }
}
guardarStorage(id:string, token: string, usuario: Usuario)
{
  localStorage.setItem('id',id);
  localStorage.setItem('token',token);
  localStorage.setItem('usuario',JSON.stringify(usuario));
  this.usuario = usuario;
  this.token= token;
}
loginGoogle(token:string)
{
  let url = URL_SERVICIOS + '/login/google';
  return this.http.post(url,{token})
  .pipe(map((resp:any)=> {
    this.guardarStorage(resp.id, resp.token, resp.usuario);
    return true;
  }));

}
login(usuario:Usuario, recuerdame:boolean=false)
{
  if (recuerdame)
  {
    localStorage.setItem('email',usuario.email);
  }
  else
  {
    localStorage.removeItem('email');
  }
  let url= URL_SERVICIOS + '/login';
  return this.http.post(url,usuario).pipe(map((resp:any)=> {
    this.guardarStorage(resp.id, resp.token, resp.usuario);
    return true;
  }));
}
}
