import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceboockComponent } from './faceboock.component';

describe('FaceboockComponent', () => {
  let component: FaceboockComponent;
  let fixture: ComponentFixture<FaceboockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceboockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceboockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
