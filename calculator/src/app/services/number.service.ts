import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  constructor(private http: HttpClient) {}

  getNumber() {
    return this.http.get(environment.READ_NUMBER);
  }

  setNumber(number: string) {
    this.http.post(`${environment.WRITE_NUMBER}${number}`, null).subscribe();
  }
}
