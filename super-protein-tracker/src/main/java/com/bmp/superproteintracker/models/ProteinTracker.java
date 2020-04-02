package com.bmp.superproteintracker.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.sql.Date;
import java.time.ZonedDateTime;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProteinTracker {

    @Id
    private String id = UUID.randomUUID().toString();

    private String name;
    private String email;
    private Integer currentProteinNo;
    private Integer desiredProteinNo;
    private boolean success;

    private ZonedDateTime registrationDate = ZonedDateTime.now();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getCurrentProteinNo() {
        return currentProteinNo;
    }

    public void setCurrentProteinNo(Integer currentProteinNo) {
        this.currentProteinNo = currentProteinNo;
    }

    public Integer getDesiredProteinNo() {
        return desiredProteinNo;
    }

    public void setDesiredProteinNo(Integer desiredProteinNo) {
        this.desiredProteinNo = desiredProteinNo;
    }

    public ZonedDateTime getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(ZonedDateTime registrationDate) {
        this.registrationDate = registrationDate;
    }

    public boolean isSuccess() { return success; }

    public void setSuccess(boolean success) { this.success = success; }
}
