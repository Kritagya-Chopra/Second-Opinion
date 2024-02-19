package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.entity.DoctorEntity;

public interface DoctorRepository extends JpaRepository<DoctorEntity, Long>{

	List<DoctorEntity> findAllBySpecialization(Long id);
	
}
