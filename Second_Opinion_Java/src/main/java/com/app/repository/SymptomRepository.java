package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.SpecializationEntity;
import com.app.entity.SymptomEntity;

public interface SymptomRepository extends JpaRepository<SymptomEntity, Long> {

}
