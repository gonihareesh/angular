import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit,AfterContentInit,AfterContentChecked{
  //title:string ='demo component';
 @Input()
  message!: string;
  @ViewChild('temp')
  tempPara!: ElementRef;
  @ContentChild('temp')
  paraContent!: ElementRef;
  constructor(){
  console.log('Demo component constructor called');
  //console.log(this.title);
  //console.log(this.message);
}
ngOnChanges(changes:SimpleChanges){
  console.log('ngOnChanges Hooks called');
  //console.log(changes);
  
}
ngOnInit(){
  console.log('ngOnInit Hooks called');
  // console.log(this.tempPara.nativeElement.innerHTML);
}
ngDoCheck(){
  console.log("ngDoCheck hook is called")
  //console.log(this.paraContent);
}
ngAfterContentInit(){
console.log("ngAfterContentInit hook called");
//console.log('In ngAfterContentInit',this.paraContent.nativeElement)
}
ngAfterContentChecked(){
  console.log("ngAfterContentChecked hook called");
//console.log('In ngAfterContentChecked',this.paraContent.nativeElement);
}
ngAfterViewInit(){
  console.log('ngAfterViewInit called');
  //console.log('In ngAfterViewInit', this.tempPara);
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked is called");
  console.log(this.tempPara.nativeElement.textContent);
}
ngOnDestroy(){
  console.log('ngOnDestroy is called');
}
}
