package com.app.service;

import java.util.List;

import com.app.dto.BlogDTO;


public interface BlogService {
	public List<BlogDTO> getAllBlogs(Long id);
	public BlogDTO add(BlogDTO b,Long id);
	public List<BlogDTO> allBlogs();
	public Boolean deleteBlog(Long id);
	public BlogDTO updateBlog(Long id, BlogDTO blog);
}
