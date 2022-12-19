import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userFormGroup: FormGroup;
  constructor(private FormBuilder: FormBuilder) {
    // this.userFormGroup = new FormGroup({
    //   fullName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    //   Email: new FormControl('',[Validators.required,Validators.email]),
    //   MobileNumber :new FormControl('',[Validators.required,Validators.pattern('(010|015|012|011)[0-9 ]{8}')]),

    //   Password :new FormControl('',[Validators.required,Validators.minLength(6)]),
    //   Address:new FormGroup({
    //     City :new FormControl('',[Validators.required]),
    //     PostalCode:new FormControl('',[Validators.required]),
    //     Street :new FormControl('',[Validators.required])
    //   })
    // })

    this.userFormGroup = this.FormBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      Email: ['', [Validators.required ,Validators.email]],
      mobileNo : FormBuilder.array([FormBuilder.control('',[Validators.required,Validators.pattern('^(010|011|012|015)[0-9]{8}$')])]),

      Password: ['', [Validators.required,Validators.minLength(6)]],
      Address:this.FormBuilder.group( {
        City : ['', [Validators.required]],
        PostalCode: ['', [Validators.required]],
        Street : ['', [Validators.required]]
      })
    })



  }

  get fullName() {
    return this.userFormGroup.get('fullName')
  }

  get Email() {
    return this.userFormGroup.get('Email')
  }

  get Password(){
    return this.userFormGroup.get('Password')
  }
  get mobileNo(){
    return this.userFormGroup.get('mobileNo') as FormArray
  }
  get city(){
    return this.userFormGroup.get('City')
  }



  AddMobileNo(){
    this.mobileNo.push(this.FormBuilder.control(''))
  }

  ngOnInit(): void {
  }

}

