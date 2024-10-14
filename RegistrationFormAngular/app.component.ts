import { Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import{from} from 'rxjs';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]

})
export class AppComponent  {
  
  name = ' STUDENT-MANAGEMENT';
  input="";
  age: number;
  email: string;
  courseOptions = ['Javascript', 'Python', 'Java', 'C++'];
  course: string;
  
  myFunction() {
    
    if (!this.name || !this.age || !this.email || !this.course) {
      alert('Form incomplete. Please fill out all Fields.');
    }
      else if (!this.email.includes('@')) {
        alert('Invalid Email. Please include "@" in the Email');
      } 
      else if (this.age > 30) {
        alert('Age must not be greater than 30.');
      } 
      else if (this.name.length < 3 ) {
        alert('Name must be atleast 3 char long.');
      }
    else {
      alert('Form submitted successfully!');
   
    }
  }
}
