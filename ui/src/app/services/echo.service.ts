import { Injectable } from '@angular/core';

@Injectable()
export class EchoService {

  constructor() { }

  // noinspection JSMethodCanBeStatic
  /**
   * Accept a string and return it as is or LOUDER.
   * @param {string} msg the original message
   * @param {boolean} loud Do you want it returned LOUDER?
   * @returns {string} the original message, or the LOUDER version
   */
  public echo(msg: string, loud: boolean = false): string {
    if (!msg) {
      return '';
    } else if (!loud) {
      return msg;
    } else {
      return msg.toUpperCase();
    }
  }

}
