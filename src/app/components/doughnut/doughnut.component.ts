import { Component, Input } from '@angular/core';
import { ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent {
  @Input() title: string = 'No title';

  public doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3'];
  public doughnutChartType: ChartType = 'doughnut';
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]
  };

}
