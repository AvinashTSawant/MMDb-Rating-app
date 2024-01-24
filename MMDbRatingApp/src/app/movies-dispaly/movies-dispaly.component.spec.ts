import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDispalyComponent } from './movies-dispaly.component';

describe('MoviesDispalyComponent', () => {
  let component: MoviesDispalyComponent;
  let fixture: ComponentFixture<MoviesDispalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesDispalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
