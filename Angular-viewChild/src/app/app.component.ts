import { QueryList, ViewChildren } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-viewChild';
  //@ViewChildren('inputEl') inputElements:QueryList<ElementRef> ;
  @ViewChildren('inputEl',{}) inputElements:QueryList<ElementRef> ;
  fullName:string='';
  // ngOnIt(){
  //   let name='';
  //   this.inputElements.forEach((el)=>{
  //     console.log(el.nativeElement.value);
  //   })
  // }
show(){
  let name='';
  this.inputElements.forEach((el)=>{
  name+=el.nativeElement.value+ ' ';
 })
  this.fullName= name.trim();
}
}
