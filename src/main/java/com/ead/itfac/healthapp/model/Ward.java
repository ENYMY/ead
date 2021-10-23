package com.ead.itfac.healthapp.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;
import javax.persistence.Id;

@Entity
@Data
public class Ward {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Long wardNumber;
    private String wardName;
    private int maxBeds;
    @ManyToMany(targetEntity = Doctor.class,fetch = FetchType.LAZY)
    private Set<Doctor> doctors;

    @OneToMany(mappedBy = "ward",fetch = FetchType.LAZY)
    private Set<Patient> patients;


}
