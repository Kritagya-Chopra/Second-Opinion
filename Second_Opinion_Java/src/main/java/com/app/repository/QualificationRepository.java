package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.QualificationEntity;

public interface QualificationRepository extends JpaRepository<QualificationEntity, Long> {
	
}
