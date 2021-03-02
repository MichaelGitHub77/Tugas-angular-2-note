import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-favourite",
  templateUrl: "./favourite.component.html",
  styleUrls: ["./favourite.component.css"]
})
export class FavouriteComponent implements OnInit {
  constructor(private router: Router, public globalvar: GlobalService) {
    this.paramjudul = this.globalvar.getJudul();
    this.paramisi = this.globalvar.getIsi();
    this.paramtanggal = this.globalvar.getTanggal();
    this.paramfavor = this.globalvar.getFav();
  }
  paramjudul;
  paramisi;
  paramtanggal;
  paramfavor;

  ngOnInit() {}
  Home() {
    this.router.navigate([""]);
  }
}
