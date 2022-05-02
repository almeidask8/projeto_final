import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  category: Category[] = [];

 constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data: Category[])=>{
      this.category = data;
      console.log(this.category);
    })
  }


  deleteCategory(id:number){
    this.categoryService.delete(id).subscribe(res => {
         this.category = this.category.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }



}
