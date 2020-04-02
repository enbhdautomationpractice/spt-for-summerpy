import { Component, OnInit } from '@angular/core';
import { ProteinTrackerService } from "../../services/protein-tracker.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ProteinTracker } from '../../models/protein-tracker.model';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-admin-view-registration',
  templateUrl: './admin-view-registration.component.html',
  styleUrls: ['./admin-view-registration.component.css']
})
export class AdminViewRegistrationComponent implements OnInit {

  private proteinTrackerForm: FormGroup;
  proteinTrackerReg: ProteinTracker = new class implements ProteinTracker {
    currentProteinNo: number;
    desiredProteinNo: number;
    email: string;
    id: string;
    name: string;
    registrationDate: string;
    success: boolean;
  };

  constructor(private proteinTrackerService: ProteinTrackerService,
              private route: ActivatedRoute,
              private router: Router) { }

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

  deleteProteinTracker(proteinTracker) {
    this.proteinTrackerService.deleteProteinTrackerRegistration(proteinTracker.id).subscribe(
      (data: ProteinTracker) => {
        console.log("Deleted Protein Tracker: " + JSON.stringify(data));
        this.navigateToAdmin();
      },
      err => console.error(err),
      () => console.log('ProteinTracker deleted')
    );
  }

  saveProteinTracker() {
    this.proteinTrackerService.updateProteinTrackerRegistration(this.proteinTrackerReg).subscribe(
      (data: ProteinTracker) => {
        console.log("Update Protein Tracker: " + JSON.stringify(data));
        this.navigateToAdmin();
      },
      err => console.error(err),
      () => console.log('ProteinTracker updated')
    );
  }

  navigateToAdmin() {
    this.router.navigateByUrl('admin');
  }
}
