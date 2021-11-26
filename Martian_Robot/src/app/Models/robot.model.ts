export class Robot{
    x:number;
    y:number;
    direction:string;
    movements:string;
    height: number;
    length: number;

    constructor(corX:number,corY:number,direction:string,movements:string){
       this.x = corX;
       this.y = corY;
       this.direction = direction;
       this.movements = movements;
    }   

   
}