import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClanComponent } from './info-clan.component';

describe('InfoClanComponent', () => {
  let component: InfoClanComponent;
  let fixture: ComponentFixture<InfoClanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoClanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
