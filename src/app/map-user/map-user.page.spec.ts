import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapUserPage } from './map-user.page';

describe('MapUserPage', () => {
  let component: MapUserPage;
  let fixture: ComponentFixture<MapUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
