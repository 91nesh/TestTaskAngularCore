import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Robot } from '../Models/robot.model';
import { DataTransferService } from '../Services/data-transfer.service';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent implements OnInit {

  robotDataForm: FormGroup;
  robotInfo: Robot;
  isDisable: boolean;
  robotInfoArray: Robot[] = [];
  constructor(private formBuilder: FormBuilder, private _dataTransfer: DataTransferService, private router: Router) { }

  ngOnInit(): void {
    this.robotDataForm = this.formBuilder.group({
      position: ['', Validators.required],
      movements: ['', [Validators.required, Validators.maxLength(100)]]
    })
    this._dataTransfer.addedRobotsData = [];
    this.isDisable = true;
  }



  //Add Robot Infromation
  addRobot() {
    if (this.robotDataForm.invalid) {
      alert("Enter valid input values");
    }
    else {
      let formValue = this.robotDataForm.value;
      let positionRobot = formValue.position.split(' ');
      let temp = [];
      for (let x = 0; x < positionRobot.length; x++) {
        if (positionRobot[x] === "") {
        } else {
          temp.push(positionRobot[x]);
        }
      }
      if (temp.length !== 3) {
        alert("Enter Valid input")
      } else {
        let posX = Number(temp[0]);
        let posY = Number(temp[1]);
        let direction = temp[2];
        
        let movements = formValue.movements;
        this.robotInfo = new Robot(posX, posY, direction, movements);
        this.robotInfoArray.push(this.robotInfo);
        this._dataTransfer.setRobotData(this.robotInfo)
        this.robotDataForm.reset();
      }
    }
    if (this.robotInfoArray.length > 0) {
      this.isDisable = false;
    }
  }

  robotResult() {
    this._dataTransfer.calculateRobotResult()
      .subscribe(data => {
        this._dataTransfer.robotResult = data;
        if (this._dataTransfer.robotResult.length > 0) {
          this.router.navigate(['/StartExploration']);
        }
      });
  }

  allowChar(event){
    let key;
    key=event.charCode;
    return (key===70 || key===76 || key==82)
  }
}
