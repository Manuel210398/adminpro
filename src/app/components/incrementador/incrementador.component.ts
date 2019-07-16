import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild ('txtProgress',null) txtProgress: ElementRef;
  @Input() leyenda: string ="Leyenda";
  @Input() porcentaje: number = 50;

  @Output () cambioValor: EventEmitter<number> = new EventEmitter ();
  constructor() { 
  }
  ngOnInit() 
  {
    //console.log ('leyenda', this.leyenda);
    //console.log ('porcentaje', this.porcentaje);
  }
  cambiarvalor(valor)
  {
    if (this.porcentaje>= 100 && valor >0 )
    {
      this.porcentaje=100;
      return;
    }
    if (this.porcentaje<= 0 && valor < 0)
    {
      this.porcentaje=0;
      return;
    }
    this.porcentaje= this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje)
  }
  onChanges (newValue : number )
  {
    //let elemHTML: any = document.getElementsByName('porcentaje')[0];
    
    //console.log(elemHTML.value);

    console.log(newValue);
    if (newValue>=100)
    {
      this.porcentaje=100;
    }
    else if (newValue<=0)
    {
      this.porcentaje=0;
    }
    else
    {
      this.porcentaje= newValue;
    }
    this.txtProgress.nativeElement.value= this.porcentaje;
    //elemHTML.value = Number (this.porcentaje);
    this.cambioValor.emit(this.porcentaje)
    this.txtProgress.nativeElement.focus();
  }
}
