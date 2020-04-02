package com.bmp.superproteintracker.controllers;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.bmp.superproteintracker.models.ProteinTracker;
import com.bmp.superproteintracker.models.dto.ProteinTrackerDto;


@RestController
@RequestMapping("/api/v1/ProteinTrackers")
public class ProteinTrackerController {

    @Autowired
    private ProteinTrackerService proteinTrackerService;

    @GetMapping("/ping")
    @ResponseStatus(HttpStatus.OK)
    public String ping() {
        return "ping ok";
    }

    @GetMapping
    public List<ProteinTracker> list() {
        return proteinTrackerService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody ProteinTracker proteinTracker) {
        ProteinTrackerService.checkSuccess(proteinTracker);
        proteinTrackerService.saveAndFlush(proteinTracker);
    }

    @GetMapping("/{id}")
    public ProteinTrackerDto get(@PathVariable("id") String id) {
        return proteinTrackerService.getOne(id);
    }

    @PutMapping("/{id}")
    public ProteinTrackerDto update(@PathVariable String id, @RequestBody ProteinTracker proteinTracker) {
        return proteinTrackerService.update(id, proteinTracker);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProteinTrackerDto delete(@PathVariable String id) {
        return proteinTrackerService.delete(id);
    }

    @PutMapping("/{id}/add/{value}")
    public ProteinTrackerDto addProtein(@PathVariable String id, @PathVariable int value) {
        return proteinTrackerService.addProtein(id, value);
    }

    @PutMapping("/{id}/remove/{value}")
    public ProteinTrackerDto removeProtein(@PathVariable String id, @PathVariable int value) {
        return proteinTrackerService.removeProtein(id, value);
    }
}
