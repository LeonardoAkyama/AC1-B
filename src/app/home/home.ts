import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ShowBanner: boolean =true;


}

