import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuextraitemComponent } from './menuextraitem.component';

describe('MenuitemComponent', () => {
  let component: MenuextraitemComponent;
  let fixture: ComponentFixture<MenuextraitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuextraitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuextraitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
