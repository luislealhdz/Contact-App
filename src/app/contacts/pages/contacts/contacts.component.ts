import { Component, OnInit, inject } from '@angular/core';
import { CardContactComponent } from '../../components/card-contact/card-contact.component';
import { ItemListContactComponent } from '../../components/item-list-contact/item-list-contact.component';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/IContact';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CardContactComponent, ItemListContactComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  contactList!: Contact[];

  contactsService = inject(ContactsService);

  ngOnInit(): void {
    this.contactsService.onFetchContacts<Contact>().subscribe(res => {
      this.contactList = res;
    });
  }
}
