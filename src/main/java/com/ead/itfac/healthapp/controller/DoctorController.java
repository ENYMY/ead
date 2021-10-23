package com.ead.itfac.healthapp.controller;

import com.ead.itfac.healthapp.model.Doctor;
import com.ead.itfac.healthapp.model.Patient;
import com.ead.itfac.healthapp.payload.request.DoctorRequest;
import com.ead.itfac.healthapp.payload.request.PatientRequest;
import com.ead.itfac.healthapp.service.impl.DoctorServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired
    private DoctorServiceImpl service;
//    TODO: create new doctor
@PostMapping("/add")
public ResponseEntity<String> addNewDoctor(@RequestBody DoctorRequest request){
    Doctor doctor = service.addDoctor(request);
    return ResponseEntity.ok("User Registered Successfully");
}

@GetMapping("/all")
    public ResponseEntity<List<Doctor>> getAllDoctors(){
    return ResponseEntity.ok(service.getAllDoctors());
}
//    TODO: update doctor details
//    TODO: delete doctor details
//    TODO: Assign doctor to wards



}
