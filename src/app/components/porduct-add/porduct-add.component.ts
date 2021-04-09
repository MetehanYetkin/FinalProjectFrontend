import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators}from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-porduct-add',
  templateUrl: './porduct-add.component.html',
  styleUrls: ['./porduct-add.component.css']
})
export class PorductAddComponent implements OnInit {

  productAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
   private toastrService:ToastrService,private productService:ProductService) { }

  ngOnInit(): void {
    this.createProductAdd();
    this.add();
  }


 createProductAdd(){
 this.productAddForm=this.formBuilder.group({
  
  productName:["",Validators.required],
  unitPrice:["",Validators.required],
  categoryId:["",Validators.required],
  unitsInStock:["",Validators.required]

 })
 }
 add(){
   if(this.productAddForm.valid){ 
     let productModel=Object.assign({},this.productAddForm.value)
     this.productService.add(productModel).subscribe(response=>{
  
       this.toastrService.success(response.message,"Başarılı")
     },responseError=>{
       if(responseError.error.Errors.length>0){
       
       for (let i = 0; i < responseError.error.Errors.length; i++) {
        this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
    
       }
     }})
     
   }else{
          this.toastrService.error("Form Eksik","Dikkat")
   }
  
  
 }




}
