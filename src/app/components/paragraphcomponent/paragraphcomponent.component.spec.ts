import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphcomponentComponent } from './paragraphcomponent.component';

describe('ParagraphcomponentComponent', () => {
  let component: ParagraphcomponentComponent;
  let fixture: ComponentFixture<ParagraphcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
