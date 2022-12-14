// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'base';
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello World</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [""]
})
export class AppComponent {
  name = 'luis ramirez';
  imgUrl =
    'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0';
  images = [
    'https://i.picsum.photos/id/237/500/500',
    'https://i.picsum.photos/id/237/500/500',
    'https://i.picsum.photos/id/237/500/500',
  ];
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['peperoni', 'bacon'],
    size: 'large',
  };
  blueClass = false;
  fontsize = 16;

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
