import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YotubeauComponent } from './yotubeau.component';

describe('YotubeauComponent', () => {
  let component: YotubeauComponent;
  let fixture: ComponentFixture<YotubeauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YotubeauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YotubeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
