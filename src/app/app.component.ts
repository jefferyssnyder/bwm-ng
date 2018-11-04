import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  componentTitle = "I am the text from the app component.ts file!!"

  clickHandler() {
    alert("I am clicked");
  }

}
