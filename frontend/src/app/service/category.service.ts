import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';

const baseUrl = 'https://eldorado-desafio-final-backend.herokuapp.com/api/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(baseUrl);
  }

  createCategory(Category: Category){
    return this.httpClient.post(baseUrl, Category);
  }


  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }



}
