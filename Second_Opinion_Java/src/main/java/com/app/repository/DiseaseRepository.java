package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.DiseaseEntity;

public interface DiseaseRepository extends JpaRepository<DiseaseEntity, Long> {

}
