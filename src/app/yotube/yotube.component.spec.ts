import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YotubeComponent } from './yotube.component';

describe('YotubeComponent', () => {
  let component: YotubeComponent;
  let fixture: ComponentFixture<YotubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YotubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YotubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
