import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmpServiceService } from '../services/emp-service.service';
import { empClass } from '../class/emp_class';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  page_title:string;
  button_title:string;
  first_name:string='';
  last_name:string='';
  designation:string;
  email:string;
  dob:any;
  address:string;
  department:number=0;
  Id:number;
  designation_arr:any[]=[];

  constructor(public _empser:EmpServiceService,public dialogRef: MatDialogRef<AddemployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit(): void {
    //console.log(this.data);
    this.page_title=this.data.page_title;
    this.button_title=this.data.button_title;
    if(this.data.isupdate==true)
    {
      this.first_name=this.data.emp_data.first_name;
      this.last_name=this.data.emp_data.last_name;
      this.designation=this.data.emp_data.designation;
      this.email=this.data.emp_data.email;
      this.dob=this.data.emp_data.dob;
      this.address=this.data.emp_data.address;
      this.department=this.data.emp_data.department;
      this.Id=this.data.emp_data.Id;
      this.dob=this.data.emp_data.dob;
    }

    this._empser.getAllDepartment().subscribe(
      (res:any)=>{
        for(let i=0;i<res.data.length;i++)
        {
          this.designation_arr.push(res.data[i]);
        }
        //console.log(this.designation_arr);
      }
    )

  }
  keyPressText(event: any)
  {
    const pattern = /[A-Z\a-z\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    // console.log(inputChar, e.charCode);
       if (!pattern.test(inputChar) || this.first_name.length>=20) {
       // invalid character, prevent input
           event.preventDefault();
      }
  }
  keyPressText2(event: any)
  {
    const pattern = /[A-Z\a-z\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    // console.log(inputChar, e.charCode);
       if (!pattern.test(inputChar) || this.last_name.length>=20) {
       // invalid character, prevent input
           event.preventDefault();
      }
  }
  onclose()
  {
    this.dialogRef.close();
  }
  submitForm(){}

  onSubmit()
  {
    //console.log(this.dob);
    if(this.data.isupdate==false)
    {
      this._empser.createEmp(new empClass(this.first_name,this.last_name,this.designation,this.email,this.dob,this.address,this.department)).subscribe(
        (res:any)=>{
          //console.log(res);
          if(res.status==true)
          {
            this.dialogRef.close(true);
          }
        }
      )
    }
    else
    {
      this._empser.updateEmp(new empClass(this.first_name,this.last_name,this.designation,this.email,this.dob,this.address,this.department,this.Id)).subscribe(
        (res:any)=>{
          //console.log(res);
          if(res.status==true)
          {
            this.dialogRef.close(true);
          }
        }
      )
    }
  }
}

