import {Component, OnDestroy} from '@angular/core';
import { dashboard } from '../assets/dashboard';
import {Observable, of, Subscription} from 'rxjs';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public dashboardJson: Object[];
  public observableData: Observable<any>;
  public subscribeRes: Subscription;
  public filteredRecords: any;
  public totalRecords: number;
  public pageSize: number = 5;
  public localDashboardData = dashboard;
  constructor(){
    this.getData();
    this.subscribeData();
    this.getTotalRecords();
  }
  public getData(){
    this.observableData = of(this.localDashboardData);
    this.observableData.subscribe( res => {
      console.log(res);
      this.dashboardJson = res;
    });
  }
public getTotalRecords(): void {
    this.totalRecords = this.localDashboardData.length;
    console.log('total records: '+ this.totalRecords);
}

public subscribeData(){
  const source = interval(5000);
  this.subscribeRes = source.subscribe(() =>
    this.getData()
    )};
public sort(val){
    var arr_val = val.split('|');
    var val1 = arr_val[0],
        val2 = +arr_val[1];
    this.dashboardJson.sort(function(a,b){
      if( typeof a[val1] !== 'string' ) {
        return val2 * (a[val1] - b[val1]);
      } else{
        if(a[val1].toUpperCase()< b[val1].toUpperCase()){
          return -val2;
        } else{
          return val2;
        }
      }
    });

    console.log(this.dashboardJson);
}

public search(text){
  this.dashboardJson = this.dashboardJson.filter( res => res['set_id'].toString().includes(text.toString()));
  // console.log(this.filteredRecords);
  // this.dashboardJson = this.filteredRecords;
}
public ngOnDestroy(): void {
  this.subscribeRes.unsubscribe();
  }
}
