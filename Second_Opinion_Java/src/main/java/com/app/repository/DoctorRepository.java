package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.entity.DoctorEntity;

public interface DoctorRepository extends JpaRepository<DoctorEntity, Long>{

	Optional<DoctorEntity> findAllBySpecializationId(Long id);
	
}
