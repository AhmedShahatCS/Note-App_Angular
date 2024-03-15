import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Notedata } from 'src/app/core/interfaces/notedata';
import { NoteService } from 'src/app/core/services/note.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(private _NoteService:NoteService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Notedata,){
      // console.log(data);
      
    }
  noteForm:FormGroup=new FormGroup({
    title:new FormControl(this.data.title? this.data.title:''),
    content:new FormControl(this.data.content? this.data.content:'')
  })

  handelUserForm(form:FormGroup):void{
    // console.log(form);
    if(!this.data.title && !this.data.content){
      this.hadelAddnote(form.value)

    }else{
      this.hadelAupdatenote(form.value)
      // console.log(form.value);
      
    }
   
    
  }
  hadelAddnote(notedata:Notedata):void{
    this._NoteService.addNote(notedata).subscribe({
      next:(response)=>{
       if(response.msg=="done"){
        // console.log(response);
        this.dialogRef.close()
       }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  
  hadelAupdatenote(notedata:Notedata):void{
    console.log(notedata);
    
   console.log( this.data);
   
    this._NoteService.updateNote(notedata,this.data._id).subscribe({
      next:(response)=>{
       if(response.msg=="done"){
        console.log(response);
        this.dialogRef.close()
       }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  }


