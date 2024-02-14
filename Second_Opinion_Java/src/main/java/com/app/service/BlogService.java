package com.app.service;

import java.util.List;

import com.app.entity.BlogEntity;

public interface BlogService {
	public List<BlogEntity> getAllBlogs(Long id);
	public BlogEntity add(BlogEntity b,Long id);
}
