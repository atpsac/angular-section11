import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.crearForm();
  }

  ngOnInit(): void {
  }

  get nombreNoValido() {
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }

  get apellidoNoValido() {
    return this.form.get('apellido').invalid && this.form.get('apellido').touched;
  }

  get correoNoValido() {
    return this.form.get('correo').invalid && this.form.get('correo').touched;
  }


  crearForm() {
    this.form = this.fb.group({
      nombre: ['', [ Validators.required, Validators.minLength(5) ]],
      apellido: ['', [ Validators.required, Validators.minLength(5) ]],
      correo: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required ]]
    });
  }

  guardar() {
    console.log(this.form);

    if ( this.form.invalid ) {
      Object.values( this.form.controls ).forEach( control => {
        control.markAsTouched();
      } );

      return;
    }
  }

}
