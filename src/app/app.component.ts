import { Component } from '@angular/core';
import * as crossfilter from 'crossfilter2';
import * as d3 from 'd3';
import * as dc from 'dc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

    constructor() {
        this.setupCharts();
    }
  
    setupCharts() {
        const chart = dc.barChart('#test');
    }
}
