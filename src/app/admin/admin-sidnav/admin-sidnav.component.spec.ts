import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidnavComponent } from './admin-sidnav.component';

describe('AdminSidnavComponent', () => {
  let component: AdminSidnavComponent;
  let fixture: ComponentFixture<AdminSidnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSidnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
