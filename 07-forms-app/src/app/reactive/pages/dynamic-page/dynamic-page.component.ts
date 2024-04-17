import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    newGame: ['', [Validators.minLength(3)]],
    favouriteGames: this.fb.array([
      ['Hollow Knight', [Validators.required, Validators.minLength(3)]],
      ['Blasphemous', [Validators.required, Validators.minLength(3)]],
      ]),
  });

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
  }

  get fabouriteGamesControls(){
    return this.myForm.controls['favouriteGames'] as FormArray;
  }

  isValidField(field: string): boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  isValidFieldInArray(formArray: FormArray, index: number){
    return formArray.controls[index].errors && formArray.controls[index].touched;
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

  onAddFavourite():void{
    if(this.myForm.controls['newGame'].invalid) {this.myForm.controls['newGame'].markAsTouched; return;};
    console.log("Valid");
    const newGame: string = this.myForm.controls['newGame'].value;
    this.fabouriteGamesControls.push(this.fb.control(newGame, Validators.required));
    this.myForm.controls['newGame'].setValue('');
  }

  onDeleteFavourite(index: number){
    this.fabouriteGamesControls.removeAt(index);
  }


  onSubmit(){
    if(this.myForm.invalid){ this.myForm.markAllAsTouched(); return};
    console.log(this.myForm.value);
  }



}
