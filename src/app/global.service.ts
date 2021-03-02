import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {
  private judul: string = "";
  private isi: string = "";
  private tanggal: string = "01/01/2020";
  private fav: boolean = true;

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

  public setJudul(judul1: string) {
    this.judul = judul1;
  }
  public setIsi(isi1: string) {
    this.isi = isi1;
  }
  public setTanggal(tanggal1: string) {
    this.tanggal = tanggal1;
  }
  public setFav(fav1: boolean) {
    this.fav = fav1;
  }
}
