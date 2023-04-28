import { Component } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent {

  real : number = 0;

  dolar : number = 0;

  euro : number = 0;

  libra : number = 0;

  result :string = "";

  result2 : string = "";

  result3 : string = "";

  calc(){
    this.result = (this.real / this.dolar).toFixed(2);

    this.result2 = (this.real / this.euro).toFixed(2);

    this.result3 = (this.real / this.libra).toFixed(2);

  }

}
