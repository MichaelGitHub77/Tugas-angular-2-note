import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  private datanote: String = "user";

  constructor() {

  }
  public getNama(){
    return this.datanote;
  }
  public setNama(nama : String){
    this.datanote = nama;
  }

}