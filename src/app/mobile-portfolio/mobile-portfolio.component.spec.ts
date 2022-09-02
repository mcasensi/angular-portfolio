import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePortfolioComponent } from './mobile-portfolio.component';

describe('MobilePortfolioComponent', () => {
  let component: MobilePortfolioComponent;
  let fixture: ComponentFixture<MobilePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
