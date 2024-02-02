import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  // private http = inject(HttpClient);

  constructor(private http: HttpClient) {}

  onFetchContacts<Contact>(): Observable<Contact[]> {
    return this.http.get<Contact[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
