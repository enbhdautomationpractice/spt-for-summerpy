package com.bmp.superproteintracker.repositories;

import com.bmp.superproteintracker.models.ProteinTracker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProteinTrackerRepository extends JpaRepository<ProteinTracker, String> {

}
