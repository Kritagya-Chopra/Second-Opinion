package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.InvoiceEntity;

public interface InvoiceRepository extends JpaRepository<InvoiceEntity, Long> {

	Object findByMyCaseId(Long id);

	void deleteByMyCaseId(Long id);

	List<InvoiceEntity> findAllByCasePatientId(Long id);

}
