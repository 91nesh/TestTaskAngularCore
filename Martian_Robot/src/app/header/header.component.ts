import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../Services/data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router,private _datatransfer:DataTransferService) { }

  ngOnInit(): void {
  }
  
  navigateHome(){ 
    this._datatransfer.addedRobotsData=[];
    this._datatransfer.robotResult=[];
    this._datatransfer.rectX=0;
    this._datatransfer.rectY=0;
    this.router.navigate(['/']);
  }
}
