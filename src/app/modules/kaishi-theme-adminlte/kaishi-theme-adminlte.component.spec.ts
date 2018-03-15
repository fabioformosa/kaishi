import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaishiThemeAdminlteComponent } from './kaishi-theme-adminlte.component';

describe('KaishiThemeAdminlteComponent', () => {
  let component: KaishiThemeAdminlteComponent;
  let fixture: ComponentFixture<KaishiThemeAdminlteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaishiThemeAdminlteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaishiThemeAdminlteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
