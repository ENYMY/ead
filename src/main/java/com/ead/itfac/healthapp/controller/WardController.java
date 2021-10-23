package com.ead.itfac.healthapp.controller;

import com.ead.itfac.healthapp.model.Ward;
import com.ead.itfac.healthapp.payload.request.WardRequest;
import com.ead.itfac.healthapp.service.impl.WardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/ward")
public class WardController {
    @Autowired
    private WardServiceImpl service;
    // TODO: create new ward
    @PostMapping("/add")
    public ResponseEntity<String> addNewWard(@RequestBody WardRequest request){
        Ward ward = service.addWardDetails(request);
        return ResponseEntity.ok("Ward Details Entered Successfully");
    }
//    TODO: update ward details
//    TODO: get ward information
    @GetMapping("/all")
    public ResponseEntity<List<Ward>> getAllWards(){
        return ResponseEntity.ok(service.getAllWardDetails());
    }

//    TODO: Get Ward doctors information


}
