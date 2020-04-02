package com.bmp.superproteintracker.controllers;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bmp.superproteintracker.models.ProteinTracker;
import com.bmp.superproteintracker.models.dto.ProteinTrackerDto;
import com.bmp.superproteintracker.repositories.ProteinTrackerRepository;


@Service
@Transactional
public class ProteinTrackerService {

    public static final int MAX_PROTEIN_ADDITION = 20;
    private static List<HistoryItem> history = new ArrayList<HistoryItem>();
    private static int historyId = 0;

    @Autowired
    private ProteinTrackerRepository proteinTrackerRepository;

    public static List<HistoryItem> getHistory() {
        return history;
    }

    public static void checkSuccess(ProteinTracker proteinTracker) {
        if (proteinTracker.getCurrentProteinNo() >= proteinTracker.getDesiredProteinNo()) {
            proteinTracker.setSuccess(true);
        }
    }

    public static void addProtein(ProteinTracker proteinTracker, int value) throws ExtremeProteinAddition  {
        if (value > MAX_PROTEIN_ADDITION) {
            throw new ExtremeProteinAddition();
        } else {
            int total = proteinTracker.getCurrentProteinNo() + value;
            proteinTracker.setCurrentProteinNo(total);
            checkSuccess(proteinTracker);
            history.add(new HistoryItem(historyId++, value, "add", total));
        }
    }

    public static void removeProtein(ProteinTracker proteinTracker, int value) {
        int total = proteinTracker.getCurrentProteinNo() - value;
        total = total < 0 ? 0 : total;
        proteinTracker.setCurrentProteinNo(total);
        checkSuccess(proteinTracker);
        history.add(new HistoryItem(historyId++, value, "subtract", total));
    }

    public List<ProteinTracker> findAll() {
        return proteinTrackerRepository.findAll();
    }

    public void saveAndFlush(ProteinTracker proteinTracker) {
        proteinTrackerRepository.saveAndFlush(proteinTracker);
    }

    public ProteinTrackerDto getOne(String id) {
        ProteinTracker t = proteinTrackerRepository.getOne(id);
        return new ProteinTrackerDto(t);
    }

    public ProteinTrackerDto update(String id, ProteinTracker proteinTracker) {
        ProteinTracker existingProteinTracker = proteinTrackerRepository.getOne(id);

        // copy the properties from the incoming ProteinTracker into the existing one
        BeanUtils.copyProperties(proteinTracker, existingProteinTracker);

        ProteinTrackerService.checkSuccess(existingProteinTracker);

        ProteinTracker t = proteinTrackerRepository.saveAndFlush(existingProteinTracker);
        return new ProteinTrackerDto(t);
    }

    public ProteinTrackerDto delete(String id) {
        ProteinTracker existingProteinTracker = proteinTrackerRepository.getOne(id);
        proteinTrackerRepository.delete(existingProteinTracker);
        return new ProteinTrackerDto(existingProteinTracker);
    }

    public ProteinTrackerDto addProtein(String id, int value) {
        ProteinTracker proteinTracker = proteinTrackerRepository.getOne(id);

        try {
            ProteinTrackerService.addProtein(proteinTracker, value);
        } catch (ExtremeProteinAddition e) {
            System.out.println("addProtein: " + e);
        }

        return new ProteinTrackerDto(proteinTrackerRepository.saveAndFlush(proteinTracker));
    }

    public ProteinTrackerDto removeProtein(String id, int value) {
        ProteinTracker proteinTracker = proteinTrackerRepository.getOne(id);
        ProteinTrackerService.removeProtein(proteinTracker, value);
        return  new ProteinTrackerDto(proteinTrackerRepository.saveAndFlush(proteinTracker));
    }

}
