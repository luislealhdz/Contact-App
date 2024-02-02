import { Component, Input } from '@angular/core';
import { Contact } from '../../models/IContact';

@Component({
  selector: 'app-card-contact',
  standalone: true,
  imports: [],
  templateUrl: './card-contact.component.html',
  styleUrl: './card-contact.component.scss'
})
export class CardContactComponent {
  @Input() contactList!: Contact[];
}
