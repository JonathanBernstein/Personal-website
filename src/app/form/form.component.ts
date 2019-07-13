import { Component, OnInit } from '@angular/core';
import { WebsiteService } from "../website.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private WebsiteService: WebsiteService) { }

  ngOnInit() {
  }
}
