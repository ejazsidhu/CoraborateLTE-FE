import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeClassesComponent } from './organize-classes.component';

describe('OrganizeClassesComponent', () => {
  let component: OrganizeClassesComponent;
  let fixture: ComponentFixture<OrganizeClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizeClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
