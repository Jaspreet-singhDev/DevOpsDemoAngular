import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  EventEmitter,
  Output
} from "@angular/core";
//import {  } from "@angular/core/src/metadata/directives";
//import {  } from "events";
//import {} from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-subbody",
  templateUrl: "./subbody.component.html",
  styleUrls: ["./subbody.component.css"]
})
export class SubbodyComponent implements OnInit, AfterViewInit {
  @Input("childName") name;
  @Output() changename: EventEmitter<string> = new EventEmitter<string>();

  data: string[] = ["abc,xyz,def"];

  global: string;
  constructor() {}

  ngOnInit() {
    let xyz = "xyz";
    console.log(this.global, xyz);
  }

  addstring(firststring: string): string {
    return firststring;
  }

  ngAfterViewInit() {
    //console.log(this.multiply({}, 4));
    // let xyz = "abc";
    // console.log(this.name, xyz);
  }

  Click() {
    this.changename.emit("my new name");
  }
}
