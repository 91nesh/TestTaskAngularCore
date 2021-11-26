import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Robot } from '../Models/robot.model';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  rectX: number;
  rectY: number;
  addedRobotsData: Robot[] = [];
  robotResult: any = [];

  constructor(private router: Router, public http: HttpClient) { }

  setRectangleArea(x: number, y: number) {
    this.rectX = x;
    this.rectY = y;
  }

  setRobotData(robot: Robot) {
    this.addedRobotsData.push(robot);
  }



  calculateRobotResult() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post('https://localhost:44337/Robot', JSON.stringify({ positionViewModels: this.addedRobotsData, height: this.rectX, length: this.rectY }), {
      headers: headers
    });
  }

  getRobotResult() {
    return this.robotResult;
  }


}


