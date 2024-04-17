import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

const defaultProduct = {
  name: '',
  price: 0,
  inStorage: 0,
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit{
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl<string>('', [], []),
  //   price: new FormControl<string>('', [], []),
  //   inStorage: new FormControl<string>('', [], []),
  // });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset(defaultProduct);
  }

  isValidField(field: string): boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field:string): string | null{
    if(!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
       switch (key) {
        case 'required': return 'Campo requerido';
        case 'minlength': return 'Se requiere un minimo de 3 letras';
        case 'min': return 'No se permiten valores inferiores a 0';
       }
    }
    return null;
  }


  onSave(){
    if(this.myForm.invalid){ this.myForm.markAllAsTouched(); return}
    console.log(this.myForm.value);
  }

}
