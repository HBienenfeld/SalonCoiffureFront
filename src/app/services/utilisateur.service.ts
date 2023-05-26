import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private BASE_URL = "http://localhost:8080/utilisateurs";  
  constructor(private httpClient:HttpClient) { }
  // GET //
  public findAll():Observable<any>{ 
    return this.httpClient.get(this.BASE_URL);
  }
  // POST //
  public save(utilisateur:Utilisateur):Observable<any>{
    return this.httpClient.post(this.BASE_URL,utilisateur);
  }
  // DELETE //
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
}
