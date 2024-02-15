package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BlogDTO;
import com.app.dto.ResponseDTO;
import com.app.entity.BlogEntity;
import com.app.service.BlogService;

@RestController
@RequestMapping
public class BlogController {
	private ResponseDTO rDto=new ResponseDTO();
	@Autowired
	private BlogService blogService;
	@GetMapping("/doctors/{id}/blogs")
	public List<BlogDTO> getBlog(@PathVariable Long id){
		return blogService.getAllBlogs(id);
	}
	@PostMapping("/doctors/{id}/blogs")
	public BlogDTO addBlog(@RequestBody BlogDTO blog,@PathVariable Long id) {
		return blogService.add(blog,id);
	}
	@GetMapping("/blogs")
	public List<BlogDTO> getAllBlog(){
		return blogService.allBlogs();
	}
	@DeleteMapping("/doctors/{id}/blogs")
	public ResponseDTO deleteDoctorBlog(@PathVariable Long id) {
		if(blogService.deleteBlog(id)) {
			rDto.setCode("success");
			rDto.setData(true);
			rDto.setMessage("Deleted Successfully");
			rDto.setStatus(true);
		}
		else {
			rDto.setCode("falied");
			rDto.setData(false);
			rDto.setMessage("Deletion Failed");
			rDto.setStatus(false);
		}
		return rDto;
	}
	@PutMapping("/doctors/blogs/{id}")
	public ResponseDTO updateDoctorBlog(@PathVariable Long id,@RequestBody BlogDTO blog) {
		BlogDTO bDto=blogService.updateBlog(id,blog);
		if(bDto==null) {
			rDto.setCode("falied");
			rDto.setData(bDto);
			rDto.setMessage("Updation Failed");
			rDto.setStatus(false);
		}
		else {
			rDto.setCode("success");
			rDto.setData(bDto);
			rDto.setMessage("Updated Successfully");
			rDto.setStatus(true);
		}
		return rDto;
	}
}
