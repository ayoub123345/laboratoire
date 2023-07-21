import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnalaysesComponent } from './list-analayses.component';

describe('ListAnalaysesComponent', () => {
  let component: ListAnalaysesComponent;
  let fixture: ComponentFixture<ListAnalaysesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnalaysesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnalaysesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
