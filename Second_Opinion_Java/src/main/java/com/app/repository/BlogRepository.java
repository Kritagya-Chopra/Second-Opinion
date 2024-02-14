package com.app.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.BlogEntity;

public interface BlogRepository extends JpaRepository<BlogEntity, Long> {
	//public BlogEntity findById(Long id);
}
