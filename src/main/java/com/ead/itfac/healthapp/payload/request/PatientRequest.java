package com.ead.itfac.healthapp.payload.request;

import lombok.Data;

@Data
public class PatientRequest {

    private  Long patientId;

    private String firstName;
    private String lastName;
    private int age;
    private String address;
    private int contactNumber;
    private String admissionDescription;
    private Long doctorId;


}
