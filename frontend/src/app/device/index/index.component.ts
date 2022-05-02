import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { Device } from 'src/app/interface/device';
import { CategoryService } from 'src/app/service/category.service';
import { DeviceService } from 'src/app/service/device.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  public filteredDevice: Device[] = [];

  public device: Device[] = [];

  public category: Category[] = [];


  constructor(private deviceService: DeviceService,
      private categoryService: CategoryService) {};

      ngOnInit(): void {
        this.categoryService.getAll().subscribe((data: Category[])=>{
          this.category = data;
          console.log(this.category);
        }),

        this.deviceService.getAll().subscribe((data: Device[])=>{
          this.device = data;
          console.log(this.device);
        })
      }


      deleteCategory(id:number){
        this.deviceService.delete(id).subscribe(res => {
             this.device = this.device.filter(item => item.id !== id);
             console.log('Device deleted!');
        })
      }
}
