package com.bmp.superproteintracker.controllers;

public class ExtremeProteinAddition extends Exception {
    @Override
    public String getMessage() {
        return "Can't add more than " + ProteinTrackerService.MAX_PROTEIN_ADDITION + " proteins";
    }
}
