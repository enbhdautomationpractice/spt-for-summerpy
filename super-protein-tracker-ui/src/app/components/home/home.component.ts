import { Component, OnInit } from '@angular/core';
import { ProteinTrackerService } from "../../services/protein-tracker.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { throwError } from "rxjs";
import {ProteinTracker} from "../../models/protein-tracker.model";
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  proteinTrackerForm: FormGroup;
  validMessage: string = "";
  mouseoverSubmit: boolean;

  constructor(private proteinTrackerService: ProteinTrackerService) { }

  ngOnInit() {
    this.proteinTrackerForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      currentProteinNo: new FormControl('', [Validators.required, Validators.pattern('(\\d)+')]),
      desiredProteinNo: new FormControl('', [Validators.required, Validators.pattern('(\\d)+')])
    })
  }

  submitRegistration() {
    if (this.proteinTrackerForm.valid) {
      this.validMessage = "Your bike registration has been submitted. Thank you!";

      let proteinTracker: ProteinTracker = this.proteinTrackerForm.value;
      proteinTracker.success = false;
      proteinTracker.registrationDate = new Date().toISOString();

      console.log(">>>", proteinTracker)

      this.proteinTrackerService.createProteinTrackerRegistration(proteinTracker).subscribe(
        data => {
          this.proteinTrackerForm.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }
}





