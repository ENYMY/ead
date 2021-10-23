package com.ead.itfac.healthapp.service.impl;

import com.ead.itfac.healthapp.model.Doctor;
import com.ead.itfac.healthapp.model.Ward;
import com.ead.itfac.healthapp.payload.request.WardRequest;
import com.ead.itfac.healthapp.repository.WardRepository;
import com.ead.itfac.healthapp.service.interfaces.IWardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WardServiceImpl implements IWardService {
    @Autowired
    private WardRepository wardRepository;

    @Override
    public Ward addWardDetails(WardRequest ward) {
        Ward ward1 = new Ward();
        ward1.setWardNumber(ward.getWardNumber());
        ward1.setWardName(ward.getWardName());
        ward1.setMaxBeds(ward.getBeds());
        return wardRepository.save(ward1);

    }

    @Override
    public Ward updateWardDetails(WardRequest ward) {
        Optional<Ward> wardReq = wardRepository.findById(ward.getId());
        if (wardReq.isEmpty()) {
            return  null;
        }
        else {
            Ward ward1 = wardReq.get();
            ward1.setWardNumber(ward.getWardNumber());
            ward1.setWardName(ward.getWardName());
            ward1.setMaxBeds(ward.getBeds());
            return ward1;

        }
    }

    @Override
    public Ward getWardDetails(int id) {
        Optional<Ward> wardReq = wardRepository.findById(id);
        if (wardReq.isEmpty()) {
            return  null;
        }
        else {
        return wardReq.get(); }
    }

    @Override
    public List<Ward> getAllWardDetails() {
        return wardRepository.findAll();
    }

//    @Override
//    public List<Doctor> getWardDoctors(Long id) {
//        return null;
//    }
}
