import { Component } from '@angular/core';

@Component({
  selector: 'app-picturecomponent',
  templateUrl: './picturecomponent.component.html',
  styleUrls: ['./picturecomponent.component.sass'],
})
export class PicturecomponentComponent {
  sizePicture: string = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sizeMediaQuery();
  }

  sizeMediaQuery() {
    if (window.innerWidth < 1440) {
      this.sizePicture = 'assets/images/hero-mobile.jpg';
    } else {
      this.sizePicture = 'assets/images/hero-desktop.jpg';
    }
  }
}
