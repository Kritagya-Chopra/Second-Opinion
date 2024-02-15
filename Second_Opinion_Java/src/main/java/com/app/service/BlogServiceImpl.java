package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.BlogDTO;
import com.app.entity.BlogEntity;
import com.app.entity.DoctorEntity;
import com.app.repository.BlogRepository;
import com.app.repository.DoctorRepository;
@Service
@Transactional
public class BlogServiceImpl implements BlogService {
	@Autowired 
	private ModelMapper mapper;
	@Autowired
	private BlogRepository blogRepository;
	@Autowired 
	private DoctorRepository doctorRepository;
	@Override
	public List<BlogDTO> getAllBlogs(Long id) {
		// TODO Auto-generated method stub
		DoctorEntity d=doctorRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Doctor Not Found"));
		List<BlogEntity> blogs=blogRepository.findByDoctorId(id);
		List<BlogDTO> bDto=new ArrayList<BlogDTO>();
		for (BlogEntity b : blogs) {
			bDto.add(mapper.map(b, BlogDTO.class));
		}
		for (BlogDTO b : bDto) {
			b.setName(d.getName());
		}
		return bDto;
	}
	@Override
	public BlogDTO add(BlogDTO b,Long id) {
		// TODO Auto-generated method stub
		DoctorEntity d=doctorRepository.findById(id).orElseThrow();
		BlogEntity blog=mapper.map(b,BlogEntity.class);
		d.addBlog(blog);
		b.setName(d.getName());
		blogRepository.save(blog);
		return b;
	}
	@Override
	public List<BlogDTO> allBlogs() {
		// TODO Auto-generated method stub
		List<BlogEntity> blogs=blogRepository.findAll();
		List<BlogDTO> bDto=new ArrayList<BlogDTO>();
		for (BlogEntity b : blogs) {
			BlogDTO blogDto=mapper.map(b, BlogDTO.class);
			blogDto.setName(b.getDoctor().getName());
			bDto.add(blogDto);
		}
		return bDto;
	}
	@Override
	public Boolean deleteBlog(Long id) {
		// TODO Auto-generated method stub
		try {
		blogRepository.deleteById(id);
		return true;
		}catch(Exception e) {
			return false;
		}
	}
	@Override
	public BlogDTO updateBlog(Long id, BlogDTO blog) {
		// TODO Auto-generated method stub
		BlogEntity b=blogRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Blog Not Found"));
		b.setContent(blog.getContent());
		b.setTitle(blog.getTitle());
		blogRepository.save(b);
		return blog;
	}

}
