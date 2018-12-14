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

  constructor() {}

  ngOnInit() {
    console.log(this.name);
  }
  ngAfterViewInit() {}

  Click() {
    this.changename.emit("my new name");
  }
}
