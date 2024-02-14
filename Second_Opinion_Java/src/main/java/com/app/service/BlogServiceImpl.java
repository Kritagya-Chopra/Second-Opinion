package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.BlogEntity;
import com.app.entity.DoctorEntity;
import com.app.repository.BlogRepository;
import com.app.repository.DoctorRepository;
@Service
@Transactional
public class BlogServiceImpl implements BlogService {
	@Autowired
	private BlogRepository blogRepository;
	@Autowired 
	private DoctorRepository doctorRepository;
	@Override
	public List<BlogEntity> getAllBlogs(Long id) {
		// TODO Auto-generated method stub
		
		return null;//blogRepository.findById(id);
	}
	@Override
	public BlogEntity add(BlogEntity b,Long id) {
		// TODO Auto-generated method stub
		DoctorEntity d=doctorRepository.findById(id).orElseThrow();
		b.setDoctor(d);
		return blogRepository.save(b);
	}

}
