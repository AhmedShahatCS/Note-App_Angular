import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { NoteService } from 'src/app/core/services/note.service';
import { Notedata } from 'src/app/core/interfaces/notedata';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  searchvalue:string=""
  allNotes:Notedata[]=[]
  constructor(public dialog: MatDialog,private _NoteService:NoteService) {}
  ngOnInit(): void {
    this._NoteService.getNote().subscribe({
      next:(response)=>{
        if(response.msg=="done"){
          // console.log(response);
          this.allNotes=response.notes
          // console.log(this.allNotes);
          
          
        }
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
  deletedNot(id:string,index:number):void{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        }).then(()=>{
          this._NoteService.deletNote(id).subscribe({
            next:(response)=>{
              // console.log(response);
             if(response.msg=="done"){
              this.allNotes.splice(index,1)
              this.ngOnInit()
             }
              
            },
            error:(err)=>{
              console.log(err);
              
            }
          })
        })
      }
    });
   
  }

  updateNot(note:Notedata,id:number):void{
    // console.log(note); 
    // console.log(id);
    this.openDialog({
      title:note.title,
      content:note.content,
      _id:note._id
    })
    
    

  }

  openDialog(note?:Notedata): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
      data: {title:note?.title, content: note?.content,_id:note?._id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      this.ngOnInit()
    });
  }

  
}
