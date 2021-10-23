package com.ead.itfac.healthapp.service.interfaces;

import com.ead.itfac.healthapp.model.Doctor;
import com.ead.itfac.healthapp.model.Ward;
import com.ead.itfac.healthapp.payload.request.DoctorRequest;

import java.util.List;

public interface IDoctorService {
    public Doctor addDoctor(DoctorRequest doctor);
    public Doctor  updateDoctorDetails(DoctorRequest doctor);
    public Doctor deleteDoctorDetails(Long id);
    public List<Doctor> getAllDoctors();
    public Doctor getDoctorInformation(Long id);

}
