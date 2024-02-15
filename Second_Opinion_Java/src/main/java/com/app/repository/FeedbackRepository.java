package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.FeedbackEntity;

public interface FeedbackRepository extends JpaRepository<FeedbackEntity, Long>{

	List<FeedbackEntity> findAllByPatientId(Long id);

	List<FeedbackEntity> findAllByDoctorId(Long id);

}
