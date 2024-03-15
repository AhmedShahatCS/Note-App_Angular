import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Notedata } from '../interfaces/notedata';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  // headers:any=localStorage.getItem("etoken")

  constructor( private _HttpClient:HttpClient) { }

  addNote(notedata:Notedata):Observable<any>{
    return this._HttpClient.post(environment.baseNot,notedata,{
      headers:{
        token:localStorage.getItem('etoken')||''
      }
    })
  }
  getNote():Observable<any>{
    return this._HttpClient.get(environment.baseNot,{
      headers:{
        token:localStorage.getItem('etoken')||''
      }
    })
  }
  deletNote(noteId:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseNot}${noteId}`,{
      headers:{
        token:localStorage.getItem('etoken')||''
      }
    })
  }
  updateNote(newNote:Notedata,noteId:string):Observable<any>{
    return this._HttpClient.put(`${environment.baseNot}${noteId}`,newNote,{
      headers:{
        token:localStorage.getItem('etoken')||''
      }
    })
  }
}
