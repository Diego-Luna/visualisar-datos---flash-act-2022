import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMcaComponent } from './data-mca.component';

describe('DataMcaComponent', () => {
  let component: DataMcaComponent;
  let fixture: ComponentFixture<DataMcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataMcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataMcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
