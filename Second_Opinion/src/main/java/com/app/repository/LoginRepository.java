package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Login;

public interface LoginRepository extends JpaRepository<Login,Long> {
	 Login findByUser(String name);
}