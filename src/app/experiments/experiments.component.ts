import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-experiments',
    templateUrl: './experiments.component.html',
    styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

    experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

    selectedExperiments: string[] = [];

    constructor() { }

    ngOnInit() { }

    addToSelectedExperiments(experiment: string): void {

        if (this.selectedExperiments.length < 3 && !this.selectedExperiments.includes(experiment)) {

            this.selectedExperiments.push(experiment);
        }
    }

}
