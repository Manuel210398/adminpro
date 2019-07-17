import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit 
{

  constructor() {

    this.contarTres().then(
      ()=> console.log('Termino')
    )
    .catch (error=> console.log('error en la promesa', error));


  }

  ngOnInit() 
  {
  }
  contarTres(): Promise<any>
  {
    let contador =0;
    let promesa = new Promise((resolve, reject) => {
    let intervalo = setInterval(()=>{
        contador +=1;
        console.log(contador);
        if (contador==3)
        {
          resolve();
          clearInterval(intervalo);
        }
      },1000);
    });
    return promesa;
  }
}
