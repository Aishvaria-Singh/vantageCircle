import { Component, HostListener, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../image.model';

@Component({
  selector: 'app-image-collage',
  templateUrl: './image-collage.component.html',
  styleUrls: ['./image-collage.component.css']
})
export class ImageCollageComponent implements OnInit {
  images: Image[] = [];
  page = 1;
  limit = 30;
  // scrollDistance = 2;
  // scrollUpDistance = 1;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages(){
    this.imageService.getImages(this.page, this.limit).subscribe((images) => {
      this.images = [...this.images, ...images];
      this.page++;
    });
  }
@HostListener('window:scroll', ['$event'])
onScroll(event:any){
  const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
  const body = document.body;
  const html = document.documentElement;
  const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  const windowBottom = windowHeight + window.pageYOffset;

  if(windowBottom >= docHeight) {
    this.loadImages();
  }
}

}
