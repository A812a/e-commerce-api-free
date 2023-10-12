import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  Products:any[] = []
  AllCategory:any[] = []
  isLoading:boolean = false;
  cartProducts:any[] =[]
  constructor(private productService:ProductsService) {}
  ngOnInit() {
    this.getproducts()
    this.getCategories()
  }

  getproducts() {
    this.isLoading = true
    this.productService.getAllProduct().subscribe({
      next: (res:any)=> {
        this.Products = res
        this.isLoading = false
      },
      error: (erorr) => {
        console.log(erorr)
        this.isLoading = false
      }
    })
  }

  getCategories() {
    this.productService.getAllCategory().subscribe({
      next: (res:any) => {
        console.log(res)
        this.AllCategory = res
      }
    })
  }

  selectCategory(event:any) {
    let selectValue = event.target.value
    if(selectValue == 'all') {
      this.getproducts()
    } else {
        this.getSelectedCategory(selectValue);
    }
  }

  getSelectedCategory(category:string) {
    this.isLoading = true;
    this.productService.getCategory(category).subscribe({
      next: (res:any) => {
        this.Products = res
        this.isLoading = false;
      }
    })
  }

  addToCart(event:any) {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist) {
        window.alert('Product is already in your cart')
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }
  }

}
