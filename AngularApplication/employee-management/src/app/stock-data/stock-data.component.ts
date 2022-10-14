import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {
  
  stockprice: any = "";
  appInterval: any = null;
  stockColor: string = "green";

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.appInterval = setInterval(() => {
      this._httpClient.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/HCL02").subscribe((response: any) => {
        
        if (this.stockprice != response.data.pricecurrent) {
          if (this.stockprice > response.data.pricecurrent) {
            this.stockColor = "red";
          } else {
            this.stockColor = "green";
          }
        }
        
        this.stockprice = response.data.pricecurrent;
      })
    }, 2000);
  }
  
  ngOnDestroy() {
    this.appInterval.unsubscribe()
  }

}
