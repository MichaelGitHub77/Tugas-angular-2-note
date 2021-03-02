import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.css"]
})
export class NoteComponent implements OnInit {
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
  FAV() {
    this.router.navigate(["/fav"]);
  }
}
