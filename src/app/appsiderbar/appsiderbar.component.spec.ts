import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsiderbarComponent } from './appsiderbar.component';

describe('AppsiderbarComponent', () => {
  let component: AppsiderbarComponent;
  let fixture: ComponentFixture<AppsiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsiderbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
