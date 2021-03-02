import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "./global.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router, public globalvar: GlobalService) {
    this.judul = this.globalvar.getJudul();
    this.isi = this.globalvar.getIsi();
    this.tanggal = this.globalvar.getTanggal();
    this.favor = this.globalvar.getFav();
  }

  name = "Angular " + VERSION.major;
  judul = "";
  isi = "";
  tanggal = "";
  favor: boolean = true;
  INPUT() {
    this.globalvar.setJudul(this.judul);
    this.globalvar.setIsi(this.isi);
    this.globalvar.setTanggal(this.tanggal);
    this.globalvar.setFav(this.favor);
    this.router.navigate(["/note"]);
  }
  FAV() {
    this.router.navigate(["/favourite"]);
  }
}
