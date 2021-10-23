package com.ead.itfac.healthapp.payload.request;

import lombok.Data;

@Data
public class WardRequest{
    private int id;
    private Long wardNumber;
    private String wardName;
    private int beds;
}
