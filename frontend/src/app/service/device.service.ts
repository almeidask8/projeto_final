import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../interface/device';


const baseUrl = 'http://localhost:3000/api/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {


  constructor(private httpClient: HttpClient) {};

  getAll(): Observable<Device[]> {
    return this.httpClient.get<Device[]>(baseUrl);
  }

  createDevice(Device: Device){
    return this.httpClient.post(baseUrl, Device);
  }


  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }

}
