package com.ead.itfac.healthapp.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    private String firstName;
    private String lastName;
    private String address;
    private int age;
    private int contactNumber;
    private String description;

    @OneToMany(mappedBy = "doctor",fetch = FetchType.LAZY)
    private Set<Patient> patients;

    @ManyToMany(targetEntity = Ward.class,fetch = FetchType.LAZY)
    private Set<Ward> wards;

}
