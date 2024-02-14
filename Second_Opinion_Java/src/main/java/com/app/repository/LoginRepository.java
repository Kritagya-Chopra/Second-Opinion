package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.UserEntity;


public interface LoginRepository extends JpaRepository<UserEntity,Long> {
	 UserEntity findByUserName(String name);
}