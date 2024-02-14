package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.BlogEntity;
import com.app.service.BlogService;

@RestController
@RequestMapping("/doctors/{doctorId}/blogs")
public class BlogController {
	@Autowired
	private BlogService blogService;
//	@GetMapping("/{id}")
//	public List<BlogEntity> getBlog(@PathVariable Long id){
//		return blogService.getAllBlogs(id);
//	}
	@PostMapping()
	public BlogEntity addBlog(@RequestBody BlogEntity blog,@PathVariable Long id) {
		return blogService.add(blog,id);
	}
}
