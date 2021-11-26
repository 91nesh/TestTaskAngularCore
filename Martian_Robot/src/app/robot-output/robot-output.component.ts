import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTransferService } from '../Services/data-transfer.service';

@Component({
  selector: 'app-robot-output',
  templateUrl: './robot-output.component.html',
  styleUrls: ['./robot-output.component.css']
})
export class RobotOutputComponent implements OnInit {

  robotCordinates:any=[];
  constructor(public _dataTransfer:DataTransferService) { }

  ngOnInit() {
    this.robotCordinates = this._dataTransfer.getRobotResult();
  }

}
