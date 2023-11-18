import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private apiSevice: ApiService) { }
  searchByDepartments() {
    return this.apiSevice.searchByDepartments().pipe(
      map((res:any)=>{
        return res as any;
      })
    )
  }
}
