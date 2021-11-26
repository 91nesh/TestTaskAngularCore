import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../Services/data-transfer.service';

@Component({
  selector: 'app-starter-screen',
  templateUrl: './starter-screen.component.html',
  styleUrls: ['./starter-screen.component.css']
})
export class StarterScreenComponent implements OnInit {

  disable:boolean = true;
  constructor(private _dataService:DataTransferService,private router:Router) { }

  ngOnInit(): void {
  }

  getHeightWidth(heightWidth:String){
    let heightWidthArray = heightWidth.split(" ");
    let tmp=[];
    for(let x=0;x<heightWidthArray.length;x++){
      if(heightWidthArray[x]===""){
  
      }
      else{
        tmp.push(heightWidthArray[x]);
      }
    }

    const x=Number(tmp[0]);
    const y=Number(tmp[1]);

        
    if(tmp.length===2){
      this._dataService.setRectangleArea(x,y);
      this.router.navigate(['/submitPlatue'])
    }
    else{
      alert("Enter Valid Input!!!")
    }
    
  }

}
