package com.ead.itfac.healthapp.repository;

import com.ead.itfac.healthapp.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}
