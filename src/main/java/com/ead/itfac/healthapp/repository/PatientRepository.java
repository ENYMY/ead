package com.ead.itfac.healthapp.repository;

import com.ead.itfac.healthapp.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository  extends JpaRepository<Patient, Long> {
}
