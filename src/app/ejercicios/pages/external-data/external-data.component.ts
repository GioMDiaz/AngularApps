import { Component, OnInit, ViewChild} from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { externalService } from './services/external.service';

@Component({
  selector: 'app-external-data',
  templateUrl: './external-data.component.html',
  styleUrls: ['./external-data.component.css']
})


export class ExternalDataComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartLabels: string[] = [];
  
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<"bar"> = {
    labels: [],
    datasets: [{data:[],  backgroundColor: 'rgb(131, 105, 185)', label: 'Mas poblados'}] 
  };
 

  constructor(private es: externalService) { }

  ngOnInit(): void {

    this.es.getHabPorPais()
    .subscribe(({ labels, datasets }) => {
      this.barChartData = { labels, datasets };
    });
}
}


