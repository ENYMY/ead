package com.ead.itfac.healthapp.service.impl;

import com.ead.itfac.healthapp.model.Doctor;
import com.ead.itfac.healthapp.model.Patient;
import com.ead.itfac.healthapp.payload.request.PatientRequest;
import com.ead.itfac.healthapp.repository.DoctorRepository;
import com.ead.itfac.healthapp.repository.PatientRepository;
import com.ead.itfac.healthapp.service.interfaces.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientServiceImpl implements IPatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Patient addPatient(PatientRequest patient) {
        Patient patient1 = new Patient();
        patient1.setFirstName(patient.getFirstName());
        patient1.setLastName(patient.getLastName());
        patient1.setAddress(patient.getAddress());
        patient1.setAge(patient.getAge());
        patient1.setAdmissionDescription(patient.getAdmissionDescription());
        patient1.setContactNumber(patient.getContactNumber());
//        Doctor doctor = doctorRepository.findById(patient.getDoctorId()).get();
//        patient1.setDoctor(doctor);
        Patient patientSaved = patientRepository.save(patient1);
        return patientSaved;

    }

    @Override
    public Patient editPatientDetails(PatientRequest patientRequest) {
        Optional<Patient> person = patientRepository.findById(patientRequest.getPatientId());
        if(person.isEmpty()){
            return null;
        }
        else {
            Patient patient= person.get();
            patient.setFirstName(patientRequest.getFirstName());
            patient.setLastName(patientRequest.getLastName());
            patient.setAddress(patientRequest.getAddress());
            patient.setAge(patientRequest.getAge());
            patient.setAdmissionDescription(patientRequest.getAdmissionDescription());
            patient.setContactNumber(patientRequest.getContactNumber());

            Patient patientSaved = patientRepository.save(patient);
            return patientSaved;

        }
    }

    @Override
    public Patient getPatientInformation(Long id) {
        return patientRepository.findById(id).get();
    }

    @Override
    public Patient addDoctorComment(Long patientId,Long doctorId, String doctorComment) {
        Optional<Patient> person = patientRepository.findById(patientId);
        if(person.isEmpty()){
            return null;
        }
        else {
            Patient patient= person.get();
            patient.setAdmissionDescription(doctorComment);
            Doctor doctor = doctorRepository.findById(doctorId).get();
            patient.setDoctor(doctor);
            Patient patientSaved = patientRepository.save(patient);
            return patientSaved;

        }
    }

    @Override
    public Patient deletePatientDetails(Long id) {
        Optional<Patient> person = patientRepository.findById(id);
        if(person.isEmpty()){
            return null;
        }
        else {
            Patient patient = person.get();
            patientRepository.deleteById(id);
            return patient;
        }
    }
    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }
}
