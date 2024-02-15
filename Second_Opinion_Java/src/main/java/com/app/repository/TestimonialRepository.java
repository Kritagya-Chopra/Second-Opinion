package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.TestimonialEntity;

public interface TestimonialRepository extends JpaRepository<TestimonialEntity, Long> {

	List<TestimonialEntity> findAllByPatientId(Long id);

}
