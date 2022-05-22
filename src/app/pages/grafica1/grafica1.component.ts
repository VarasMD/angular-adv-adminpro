import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels1: string[] = ['Download Marketing', 'In-Store Marketing', 'Mail-Order Marketing'];
  public labels2: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public labels3: string[] = ['Download Finance', 'In-Store Finance', 'Mail-Order Finance'];
  public labels4: string[] = ['Download IT', 'In-Store IT', 'Mail-Order IT'];
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 30, 100, 100 ] }
    ]
  };
  public data2: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [
      { data: [ 100, 50, 100 ] }
    ]
  };
  public data3: ChartData<'doughnut'> = {
    labels: this.labels3,
    datasets: [
      { data: [ 100, 50, 100 ] }
    ]
  };
  public data4: ChartData<'doughnut'> = {
    labels: this.labels4,
    datasets: [
      { data: [ 80, 50, 10 ] }
    ]
  };
 }
