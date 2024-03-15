import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
 

  MatDialogModule,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
   
  
  ]
})
export class SharedModule { }
