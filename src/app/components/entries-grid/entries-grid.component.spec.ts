import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesGridComponent } from './entries-grid.component';

describe('EntriesGridComponent', () => {
  let component: EntriesGridComponent;
  let fixture: ComponentFixture<EntriesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntriesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
