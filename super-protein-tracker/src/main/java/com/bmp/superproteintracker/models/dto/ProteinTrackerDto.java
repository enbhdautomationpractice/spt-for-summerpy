package com.bmp.superproteintracker.models.dto;

import java.time.ZonedDateTime;
import com.bmp.superproteintracker.models.ProteinTracker;


public class ProteinTrackerDto {

    private final String id;
    private final String name;
    private final String email;
    private final Integer currentProteinNo;
    private final Integer desiredProteinNo;
    private final boolean success;
    private final ZonedDateTime registrationDate;

    public ProteinTrackerDto(ProteinTracker entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.email = entity.getEmail();
        this.currentProteinNo = entity.getCurrentProteinNo();
        this.desiredProteinNo = entity.getDesiredProteinNo();
        this.success = entity.isSuccess();
        this.registrationDate = entity.getRegistrationDate();
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Integer getCurrentProteinNo() {
        return currentProteinNo;
    }

    public Integer getDesiredProteinNo() {
        return desiredProteinNo;
    }

    public boolean isSuccess() {
        return success;
    }

    public ZonedDateTime getRegistrationDate() {
        return registrationDate;
    }

    @Override
    public boolean equals(Object o) {
        // If the object is compared with itself then return true
        if (o == this) {
            return true;
        }

        /* Check if o is an instance of ProteinTrackerDto or not
          "null instanceof [type]" also returns false */
        if (!(o instanceof ProteinTrackerDto)) {
            return false;
        }

        // typecast o to ProteinTrackerDto so that we can compare data members
        ProteinTrackerDto c = (ProteinTrackerDto) o;

        // Compare the data members and return accordingly
        return id.equals(c.id)
                && name.equals(c.name)
                && email.equals(c.email)
                && currentProteinNo == c.currentProteinNo
                && desiredProteinNo == c.desiredProteinNo
                && Boolean.compare(success, c.success) == 0
                && registrationDate.equals(c.registrationDate);
    }

}
