import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfbannerComponent } from './cfbanner.component';

describe('CfbannerComponent', () => {
  let component: CfbannerComponent;
  let fixture: ComponentFixture<CfbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
