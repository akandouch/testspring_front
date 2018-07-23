import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products:Product[];
  private name:string;
  private product:Product = new Product();
  private configService:ConfigService<Product>;

  private listProductOsb:Observable<Product[]>;

  constructor(configService:ConfigService<Product>) { 
    this.configService = configService;
    this.listProductOsb = this.configService.get("product/list");
    this.listProductOsb.subscribe(products=>this.products = products);
  }

  ngOnInit() {
    
  }

  addProduct(){
    this.configService.post("product/", this.product).subscribe();
    this.listProductOsb.subscribe(products=>this.products = products);
  }

  deleteProduct(product:Product){

    console.log(product);
    this.configService.delete("product/",product).subscribe();
    this.listProductOsb.subscribe(products=>this.products = products);
  }

}
