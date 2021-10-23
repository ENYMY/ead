package com.ead.itfac.healthapp.controller;

import com.ead.itfac.healthapp.model.Patient;
import com.ead.itfac.healthapp.payload.request.PatientRequest;
import com.ead.itfac.healthapp.service.impl.PatientServiceImpl;
import com.ead.itfac.healthapp.service.interfaces.IPatientService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientServiceImpl service;

    //    TODO: create new patient
    @PostMapping("/add")
    public ResponseEntity<String> addNewPatient(@RequestBody PatientRequest request){
        Patient patient = service.addPatient(request);
        return ResponseEntity.ok("User Registered Successfully");
    }
//    TODO: update patient details
//    TODO: get Patient details
    @GetMapping("/all")
    public ResponseEntity<List<Patient>> getAllPatients() {
        return ResponseEntity.ok(service.getAllPatients());
    }
//    TODO: Delete Patient detaIls



}
