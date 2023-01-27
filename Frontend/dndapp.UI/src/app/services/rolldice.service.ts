import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolldiceService {

  baseurl: string = 'https://localhost:7092/api/DiceRoll'

  constructor(private httpclient: HttpClient) { }

  rolldice(numofdice: number, dicetype: number){
    return this.httpclient.get(`${this.baseurl}/${numofdice}d${dicetype}`);
  }

  rolld4(numofdice: number){
    return this.httpclient.get(`${this.baseurl}/${numofdice}d4`);
  }

  rolld6(numofdice: number){
    return this.httpclient.get(`${this.baseurl}/${numofdice}d6`);
  }

  rolld8(numofdice: number){
    return this.httpclient.get(`${this.baseurl}/${numofdice}d8`);
  }

  rolld10(numofdice: number){
    return this.httpclient.get(`${this.baseurl}/${numofdice}d10`);
  }

  rolld12(numofdice: number){
    return this.httpclient.get(`${this.baseurl}/${numofdice}d12`);
  }

  rolld20(numofdice: number){
    return this.httpclient.get(`${this.baseurl}/${numofdice}d20`);
  }

  rolld100(numofdice: number){
    return this.httpclient.get(`${this.baseurl}/${numofdice}d100`);
  }
}
