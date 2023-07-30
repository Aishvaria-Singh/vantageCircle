import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCollageComponent } from './image-collage.component';

describe('ImageCollageComponent', () => {
  let component: ImageCollageComponent;
  let fixture: ComponentFixture<ImageCollageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCollageComponent]
    });
    fixture = TestBed.createComponent(ImageCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
