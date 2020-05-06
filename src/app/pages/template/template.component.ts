import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Cristian',
    apellido: 'Angulo',
    correo: 'cangulo@gmail.com',
    pais: 'ARG',
    genero: 'M'

  };

  paises: any[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
    this.paisService.getPaises()
    .subscribe( paises => {
      this.paises = paises;
      this.paises.unshift({
        nombre: '[Seleccione País]',
        codigo: ''
      });
    } );
  }

  guardar( form: NgForm ) {
    console.log( form );

    if ( form.invalid ) {
      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();
      } );

      return;
    }

    console.log( form.value );
  }

}
