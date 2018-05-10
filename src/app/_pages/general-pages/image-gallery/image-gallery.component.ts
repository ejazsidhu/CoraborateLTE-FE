import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  btnToggle: boolean;
  constructor() { 
    this.btnToggle=false;
  }


  toggleBtn(){
    this.btnToggle=!this.btnToggle;
  }
  ngOnInit() {
  }

}
