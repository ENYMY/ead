package com.ead.itfac.healthapp.payload.request;

import lombok.Data;

@Data
public class DoctorRequest {
    private  Long id;

    private String firstName;
    private String lastName;
    private String address;
    private int age;
    private int contactNumber;
    private String description;

}
