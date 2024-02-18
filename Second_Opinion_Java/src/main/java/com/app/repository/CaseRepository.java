package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.CaseEntity;

public interface CaseRepository extends JpaRepository<CaseEntity, Long> {
	List<CaseEntity> findAllByPatientId(Long patientId);

	List<CaseEntity> findAllByDoctorId(Long id);
}
