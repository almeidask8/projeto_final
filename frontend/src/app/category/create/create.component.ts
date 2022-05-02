import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/interface/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router

    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name:[''],
    });
  }

  cadastrar(){
    const novoUsuario = this.form.getRawValue() as Category;
    this.categoryService.createCategory(novoUsuario).subscribe(
    ()=>{
      window.location.reload();
      // this.router.navigate(['category']);
      },
      (error) => {
        console.log('error');
      }
    )
  }
}
