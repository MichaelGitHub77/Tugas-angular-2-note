import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router) {}
  name = "Angular " + VERSION.major;
  judul = "";
  isi = "";
  tanggal = "";
  favor = true;
  INPUT() {
    this.router.navigate(["/note"]);
  }
  FAV() {
    this.router.navigate(["/favourite"]);
  }
}
