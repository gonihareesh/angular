import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // pname: string="Hari";
  addToCart:number=0;
  product={
  name:'iPhone 13',
  price: 655,
  color:'moon-white',
  discont: 7.5,
  inStock:5,
  pImage:'/assets/images/iphone.jpg'
}
getDiscountedPrice(){
 return  this.product.price-(this.product.price*this.product.discont/100);
}
// onNameChange(event:any){
//   this.pname=event.target.value;
//   console.log(event.target.value);
// }
decrementCartValue(){
  this.addToCart+=1;
}
increment(){
  this.addToCart+=1;
}
}
