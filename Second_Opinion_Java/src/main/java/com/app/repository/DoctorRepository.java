package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entity.DoctorEntity;


public interface DoctorRepository extends JpaRepository<DoctorEntity, Long>{

}
