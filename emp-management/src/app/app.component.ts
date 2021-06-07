import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EmpServiceService } from './services/emp-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddemployeeComponent } from './addemployee/addemployee.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'emp-management';
  emp_data:any[]=[];
  displayedColumns: string[] = ['first_name', 'last_name', 'designation', 'email','dob','address','department','action'];
  dataSource = new MatTableDataSource();

  constructor(private _empser:EmpServiceService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.emp_data=[];
    this._empser.getAllEmp().subscribe(
      (temp:any)=>{
        //console.log(temp);
        if(temp.status==true)
        {
          for(let i=0;i<temp.data.length;i++)
          {
            //console.log(temp.data[i]);
            this.emp_data.push(temp.data[i]);
          }
          this.dataSource.data=this.emp_data;
          //console.log(this.emp_data);
        }
      }
    )

  }

  updateemployee(item)
  {
    const dialogRef = this.dialog.open(AddemployeeComponent,
      {data: {page_title: 'Update Employee', button_title: 'UPDATE',isupdate:true,emp_data:item}});

      dialogRef.afterClosed().subscribe(result => {
        if(result==true)
        {
          this.ngOnInit();
        }
      });
  }
  deleteemployee(item)
  {
    this._empser.delete_employee(item.Id).subscribe(
      (res:any)=>{
        //console.log(res);
        if(res.status==true)
        {
          this.ngOnInit();
        }
      }
    )
  }
  onAddemp()
  {
    const dialogRef = this.dialog.open(AddemployeeComponent,{
      data:{page_title: 'Create Employee', button_title: 'CREATE',isupdate:false}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==true)
      {
        this.ngOnInit();
      }
    });
  }

}
