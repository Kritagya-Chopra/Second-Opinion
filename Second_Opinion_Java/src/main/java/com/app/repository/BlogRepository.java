package com.app.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.BlogEntity;

public interface BlogRepository extends JpaRepository<BlogEntity, Long> {
	public List<BlogEntity> findByDoctorId(Long id);
}
