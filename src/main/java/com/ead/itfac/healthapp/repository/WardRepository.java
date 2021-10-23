package com.ead.itfac.healthapp.repository;

import com.ead.itfac.healthapp.model.Ward;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WardRepository extends JpaRepository<Ward, Integer> {
}
