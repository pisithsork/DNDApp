import { Component, OnInit } from '@angular/core';
import { RolldiceService } from '../../services/rolldice.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  d4values: any;
  d4total: number = 0;
  d6values: any;
  d6total: number = 0;
  d8values: any;
  d8total: number = 0;
  d10values: any;
  d10total: number = 0;
  d12values: any;
  d12total: number = 0;
  d20values: any;
  d20total: number = 0;
  d100values: any;
  d100total: number = 0;
  path!: string;

  constructor(private diceservice:RolldiceService){

  }

  ngOnInit(): void {
  }

  getimage(value: any, dice: string){
    
    return './../../../assets/pictures/'+dice+'/'+value.toString()+'.png';
  }

  rolld4(numofdice: any, dicetype: number){
    if(Number(numofdice) < 0){
      alert("Please enter a value greater than 0");
      return
    }
    this.d4total = 0;
    this.diceservice.rolldice(Number(numofdice), dicetype).subscribe(
      (resp) =>{
        this.d4values = resp
        console.log(this.d4values)
        this.d4values.forEach((element: number) => {
      this.d4total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  rolld6(numofdice: any, dicetype: number){
    if(Number(numofdice) < 0){
      alert("Please enter a value greater than 0");
      return
    }
    if(Number(numofdice) > 100){
      alert("Please enter a value less than 100");
      return
    }
    this.d6total = 0;
    this.diceservice.rolldice(Number(numofdice), dicetype).subscribe(
      (resp) =>{
        this.d6values = resp
        console.log(this.d6values)
        this.d6values.forEach((element: number) => {
      this.d6total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  rolld8(numofdice: any, dicetype: number){
    if(Number(numofdice) < 0){
      alert("Please enter a value greater than 0");
      return
    }
    if(Number(numofdice) > 100){
      alert("Please enter a value less than 100");
      return
    }
    this.d8total = 0;
    this.diceservice.rolldice(Number(numofdice), dicetype).subscribe(
      (resp) =>{
        this.d8values = resp
        console.log(this.d8values)
        this.d8values.forEach((element: number) => {
      this.d8total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  rolld10(numofdice: any, dicetype: number){
    if(Number(numofdice) < 0){
      alert("Please enter a value greater than 0");
      return
    }
    if(Number(numofdice) > 100){
      alert("Please enter a value less than 100");
      return
    }
    this.d10total = 0;
    this.diceservice.rolldice(Number(numofdice), dicetype).subscribe(
      (resp) =>{
        this.d10values = resp
        console.log(this.d10values)
        this.d10values.forEach((element: number) => {
      this.d10total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  rolld12(numofdice: any, dicetype: number){
    if(Number(numofdice) < 0){
      alert("Please enter a value greater than 0");
      return
    }
    if(Number(numofdice) > 100){
      alert("Please enter a value less than 100");
      return
    }
    this.d12total = 0;
    this.diceservice.rolldice(Number(numofdice), dicetype).subscribe(
      (resp) =>{
        this.d12values = resp
        console.log(this.d12values)
        this.d12values.forEach((element: number) => {
      this.d12total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  rolld20(numofdice: any, dicetype: number){
    if(Number(numofdice) < 0){
      alert("Please enter a value greater than 0");
      return
    }
    if(Number(numofdice) > 100){
      alert("Please enter a value less than 100");
      return
    }
    this.d20total = 0;
    this.diceservice.rolldice(Number(numofdice), dicetype).subscribe(
      (resp) =>{
        this.d20values = resp
        console.log(this.d20values)
        this.d20values.forEach((element: number) => {
      this.d20total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  rolld100(numofdice: any, dicetype: number){
    if(Number(numofdice) < 0){
      alert("Please enter a value greater than 0");
      return
    }
    if(Number(numofdice) > 100){
      alert("Please enter a value less than 100");
      return
    }
    this.d100total = 0;
    this.diceservice.rolldice(Number(numofdice), dicetype).subscribe(
      (resp) =>{
        this.d100values = resp
        console.log(this.d100values)
        this.d100values.forEach((element: number) => {
      this.d100total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
