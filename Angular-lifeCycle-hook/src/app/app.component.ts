import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-lifeCycle-hook';
destroy:boolean=true;
inputVal:string='';
  constructor(){
    console.log('App component constructor called');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit hook of appComponent called');
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked hook of appComponent called');
    
  }
  onButtonChange(inputEl :HTMLInputElement){
    this.inputVal=inputEl.value;
  }
  destroyComponent(){
    this.destroy=!this.destroy;
  }
}
