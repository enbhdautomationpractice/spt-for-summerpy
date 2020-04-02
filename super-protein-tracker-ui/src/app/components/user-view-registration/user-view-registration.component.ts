import { Component, OnInit } from '@angular/core';
import { ProteinTrackerService } from "../../services/protein-tracker.service";
import { ActivatedRoute } from "@angular/router";
import { ProteinTracker } from '../../models/protein-tracker.model';

@Component({
  templateUrl: './user-view-registration.component.html',
  styleUrls: ['./user-view-registration.component.css']
})
export class UserViewRegistrationComponent implements OnInit {

  proteinTrackerReg: ProteinTracker;
  delta: number = 10;

  constructor(private proteinTrackerService: ProteinTrackerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProteinTrackerReg(this.route.snapshot.params.id);
  }

  getProteinTrackerReg(id: string) {
    this.proteinTrackerService.getProteinTracker(id).subscribe(
      (data: ProteinTracker) => {
        this.proteinTrackerReg = data;
      },
      err => console.error(err),
      () => console.log('Protein Tracker loaded')
    )
  }

  subtractValue() {
    this.proteinTrackerService.removeProtein(this.proteinTrackerReg.id, this.delta).subscribe(
      (data: ProteinTracker) => {
        console.log("Protein Tracker after subtracting " + this.delta + " from Current Protein Number: " + JSON.stringify(data));
      },
      err => console.error(err),
      () => this.getProteinTrackerReg(this.proteinTrackerReg.id)
    );
  }

  addValue() {
    this.proteinTrackerService.addProtein(this.proteinTrackerReg.id, this.delta).subscribe(
      (data: ProteinTracker) => {
        console.log("Protein Tracker after adding " + this.delta + " to Current Protein Number: " + JSON.stringify(data));
      },
      err => console.error(err),
      () => this.getProteinTrackerReg(this.proteinTrackerReg.id)
    );

    this.getProteinTrackerReg(this.proteinTrackerReg.id);
  }
}
