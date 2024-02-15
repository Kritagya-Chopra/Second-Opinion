package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.OpinionEntity;

public interface OpinionRepository extends JpaRepository<OpinionEntity, Long> {

}
