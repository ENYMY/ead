package com.ead.itfac.healthapp.service.interfaces;

import com.ead.itfac.healthapp.model.Patient;
import com.ead.itfac.healthapp.payload.request.PatientRequest;

import java.util.List;

public interface IPatientService {
    public Patient addPatient(PatientRequest patient);
    public Patient editPatientDetails(PatientRequest patientRequest);
    public Patient getPatientInformation(Long id);
    public Patient addDoctorComment(Long patientId,Long doctorId, String doctorComment);
    public Patient deletePatientDetails(Long id);
    public List<Patient> getAllPatients() ;

}
