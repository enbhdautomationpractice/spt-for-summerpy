import { Component, OnInit } from '@angular/core';
import { ProteinTracker } from "../../models/protein-tracker.model";
import { ProteinTrackerService } from "../../services/protein-tracker.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public proteinTrackers: ProteinTracker[];

  constructor(private proteinTrackerService: ProteinTrackerService,
              public auth: AuthService) { }

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
}
