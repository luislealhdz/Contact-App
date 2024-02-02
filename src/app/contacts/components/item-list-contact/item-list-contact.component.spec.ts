import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListContactComponent } from './item-list-contact.component';

describe('ItemListContactComponent', () => {
  let component: ItemListContactComponent;
  let fixture: ComponentFixture<ItemListContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemListContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemListContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
