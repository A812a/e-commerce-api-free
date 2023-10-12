import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  id:any
  productData:any = {}
  isLoading:boolean = false;

  constructor(private activateRoute:ActivatedRoute, private service:ProductsService) {
    this.id = this.activateRoute.snapshot.paramMap.get("id")
    console.log(this.id)
  }
  ngOnInit(): void {
    this.getDetails()
  }

  getDetails() {
    this.isLoading = true;
    this.service.getSingleProduct(this.id).subscribe(res => {
      this.isLoading = false;
      this.productData = res
      console.log(this.productData)
    })
  }

}
