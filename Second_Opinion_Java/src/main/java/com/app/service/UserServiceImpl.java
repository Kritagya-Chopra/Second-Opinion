package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ResponseDTO;
import com.app.dto.UserRequestDTO;
import com.app.entity.UserEntity;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepository;
	@Override
	public ResponseDTO addUser(UserRequestDTO u) {
		ModelMapper map = new ModelMapper();
		UserEntity user = map.map(u, UserEntity.class);
		user.setValid(true);
		ResponseDTO resp  = new ResponseDTO();
		
		UserEntity addedUser = userRepository.save(user);
		
		if(addedUser == null)
		{
			resp.setStatus(false);
			resp.setData(null);
			resp.setMessage("Some Error Occured");
			resp.setCode("ERROR");
		}
		else
		{
		resp.setStatus(true);
		resp.setData(addedUser);
		resp.setMessage("User Added Successfully");
		resp.setCode("Ok");
		}
		
		return resp;
	}
	

}
