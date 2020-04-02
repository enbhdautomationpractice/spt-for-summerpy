import { Component, OnInit } from '@angular/core';
import { ProteinTrackerService } from "../../services/protein-tracker.service";
import { ProteinTracker } from '../../models/protein-tracker.model';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public proteinTrackers: ProteinTracker[];

  constructor(private proteinTrackerService: ProteinTrackerService) { }

  ngOnInit() {
    this.getProteinTrackers();
  }

  getProteinTrackers() {
    this.proteinTrackerService.getProteinTrackers().subscribe(
      (data: ProteinTracker[]) => {
        this.proteinTrackers = data
      },
      err => console.error(err),
      () => console.log('ProteinTrackers loaded')
    );
  }

  deleteProteinTracker(proteinTracker) {
    this.proteinTrackerService.deleteProteinTrackerRegistration(proteinTracker.id).subscribe(
      (data: ProteinTracker) => {
        this.getProteinTrackers();
      },
      err => console.error(err),
      () => console.log('ProteinTracker deleted')
    );
  }

}
