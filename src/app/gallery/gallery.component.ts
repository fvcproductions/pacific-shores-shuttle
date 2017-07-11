import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '100%',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/map.png',
        medium: 'assets/img/map.png',
        big: 'assets/img/map.png',
        description: 'This is an updated map with all the shuttle stops.'
      },
      {
        small: 'assets/img/redwood.png',
        medium: 'assets/img/redwood.png',
        big: 'assets/img/redwood.png',
        description: 'This is where the shuttle picks you up and drops you off by the Caltrain station.'
      },
      {
        small: 'assets/img/1200.jpg',
        medium: 'assets/img/1200.jpg',
        big: 'assets/img/1200.jpg',
        description: 'This is the stop for 1200-1300 Seaport Blvd.'
      },
      {
        small: 'assets/img/1400.jpg',
        medium: 'assets/img/1400.jpg',
        big: 'assets/img/1400.jpg',
        description: 'This is the stop for 1400 Seaport Blvd.'
      },
      {
        small: 'assets/img/1700.jpg',
        medium: 'assets/img/1700.jpg',
        big: 'assets/img/1700.jpg',
        description: 'This is the stop for 1700 Seaport Blvd.'
      },
      {
        small: 'assets/img/1900.jpg',
        medium: 'assets/img/1900.jpg',
        big: 'assets/img/1900.jpg',
        description: 'This is the stop for 1900-2000 Seaport Blvd.'
      }
    ];
  }

}
