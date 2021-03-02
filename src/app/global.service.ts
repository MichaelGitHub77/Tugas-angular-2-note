import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {
  private judul: string = "";
  private isi: string = "";
  private tanggal: string = "01/01/2020";
  private fav: Boolean = true;

  constructor() {}
  public getJudul() {
    return this.judul;
  }
  public getIsi() {
    return this.isi;
  }
  public getTanggal() {
    return this.tanggal;
  }
  public getFav() {
    return this.fav;
  }
}
