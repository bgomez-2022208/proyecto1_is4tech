import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormualarioComponent } from './formualario.component';

describe('FormualarioComponent', () => {
  let component: FormualarioComponent;
  let fixture: ComponentFixture<FormualarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormualarioComponent]
    });
    fixture = TestBed.createComponent(FormualarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
