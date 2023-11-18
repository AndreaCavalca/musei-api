import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basuUrl ="https://collectionapi.metmuseum.org/public/collection/v1/";
  constructor(private http:HttpClient) { }
  searchByDepartments(){
    return this.http.get(this.basuUrl +"departments");
  }

}
