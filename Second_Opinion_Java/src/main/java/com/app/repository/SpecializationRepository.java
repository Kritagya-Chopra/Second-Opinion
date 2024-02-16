package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.SpecializationEntity;

public interface SpecializationRepository extends JpaRepository<SpecializationEntity, Long>{

}
