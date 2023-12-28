import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-ngContainer';
  toggle:Boolean=true;

  onToggle(){
    this.toggle=! this.toggle;
  }
}
