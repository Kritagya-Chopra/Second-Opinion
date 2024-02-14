package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.entity.PatientEntity;

public interface PatientRepository extends JpaRepository<PatientEntity, Long> {

}
