import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./contacts/pages/contacts/contacts.component').then(
        m => m.ContactsComponent
      )
  }
];
