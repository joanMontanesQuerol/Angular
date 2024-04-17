import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();
    if(value === 'strider'){
      return{
        noStrider: true
      }
    }

    return null;
  }

  public isValidField(form:FormGroup, field: string): boolean | null{
    return form.controls[field].errors && form.controls[field].touched;
  }

  isFieldOneEqualFieldTwo(fiedOne:string, fieldTwo:string){
    return (formGroup: AbstractControl): ValidationErrors | null=>{
      const fieldValue1 = formGroup.get(fiedOne)?.value;
      const fieldValue2 = formGroup.get(fieldTwo)?.value;

      if(fieldValue1 !== fieldValue2){
        formGroup.get(fieldTwo)?.setErrors({notEqual: true})
        return {notEqual: true}
      }

      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    }
  }

}
