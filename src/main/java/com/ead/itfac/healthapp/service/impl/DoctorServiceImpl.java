package com.ead.itfac.healthapp.service.impl;

import com.ead.itfac.healthapp.model.Doctor;
import com.ead.itfac.healthapp.payload.request.DoctorRequest;
import com.ead.itfac.healthapp.repository.DoctorRepository;
import com.ead.itfac.healthapp.service.interfaces.IDoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class DoctorServiceImpl implements IDoctorService {

    @Autowired
    private DoctorRepository doctorRepository;
    @Override
    public Doctor addDoctor(DoctorRequest doctor) {
        Doctor doctor1 = new Doctor();
        doctor1.setFirstName(doctor.getFirstName());
        doctor1.setLastName(doctor.getLastName());
        doctor1.setContactNumber(doctor.getContactNumber());
        doctor1.setAddress(doctor.getAddress());
        doctor1.setAge(doctor.getAge());
        doctor1.setDescription(doctor.getDescription());
        return doctorRepository.save(doctor1);
    }

    @Override
    public Doctor updateDoctorDetails(DoctorRequest doctor) {
        Optional<Doctor> person = doctorRepository.findById(doctor.getId());
        if (person.isEmpty()) {
            return  null;
        }
        else {
            Doctor doctor1 = person.get();
            doctor1.setFirstName(doctor.getFirstName());
            doctor1.setLastName(doctor.getLastName());
            doctor1.setContactNumber(doctor.getContactNumber());
            return doctorRepository.save(doctor1);
        }

    }

    @Override
    public Doctor deleteDoctorDetails(Long id) {
        Optional<Doctor> person = doctorRepository.findById(id);
        if (person.isEmpty()) {
            return  null;
        }
        else {
            Doctor doctor = person.get();
            doctorRepository.delete(doctor);
            return doctor;
        }
    }

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor getDoctorInformation(Long id) {
        Optional<Doctor> person = doctorRepository.findById(id);
        if (person.isEmpty()) {
            return  null;
        }
        else {
        return person.get();
        }
    }
}
