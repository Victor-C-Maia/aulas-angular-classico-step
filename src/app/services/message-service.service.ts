import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  // add(arg0: string) {
  //   throw new Error('Method not implemented.');
  // }
  add(message: string) {
    this.messages.push(message);
  }

  // constructor() { }

  clear() {
    this.messages = [];
  }

}
