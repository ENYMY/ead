package com.ead.itfac.healthapp.service.interfaces;


import com.ead.itfac.healthapp.model.Doctor;
import com.ead.itfac.healthapp.model.Ward;
import com.ead.itfac.healthapp.payload.request.WardRequest;

import java.util.List;

public interface IWardService {
    public Ward addWardDetails(WardRequest ward);
    public Ward updateWardDetails(WardRequest ward);
    public Ward getWardDetails(int id);


    public List<Ward> getAllWardDetails();
//    public List<Doctor> getWardDoctors();

}
