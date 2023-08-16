import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private rouer: Router) { }

  ngOnInit(): void {
  }


  navigate(route: string){
    this.rouer.navigate([route]);
  }

}
