import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user:string;

  //vi tar emot parametrar genom att subscriba på params
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.user = params.id;
    })
  }
  ngOnInit() {
  }

}
