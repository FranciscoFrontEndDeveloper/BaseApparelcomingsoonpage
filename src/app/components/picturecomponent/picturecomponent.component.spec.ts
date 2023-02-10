import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturecomponentComponent } from './picturecomponent.component';

describe('PicturecomponentComponent', () => {
  let component: PicturecomponentComponent;
  let fixture: ComponentFixture<PicturecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicturecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
