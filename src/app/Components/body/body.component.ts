import { Component, OnInit } from "@angular/core";
import { ApiServiceService } from "src/app/Services/api-service.service";
import { Idata } from "src/app/Components/model";

@Component({
  selector: "main",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {
  data: Idata[] = [];
  constructor(private _service: ApiServiceService) {}

  ngOnInit() {
    this._service
      .getData()

      .then(res => {
        console.log(res.data);
        // res.map(r => {
        //   this.data = r.data;
        // });
        res.data.forEach((element: Idata) => {
          this.data.push(element);
        });
        //console.log(this.data);
      })
      .catch(err => console.log(err));
  }
}
