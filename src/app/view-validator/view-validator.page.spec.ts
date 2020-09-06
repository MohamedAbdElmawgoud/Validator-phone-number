import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewValidatorPage } from './view-validator.page';

describe('ViewValidatorPage', () => {
  let component: ViewValidatorPage;
  let fixture: ComponentFixture<ViewValidatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewValidatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewValidatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
