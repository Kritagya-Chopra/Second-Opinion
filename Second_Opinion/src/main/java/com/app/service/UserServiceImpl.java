package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ResponseDTO;
import com.app.dto.UserRequestDTO;
import com.app.entity.UserEntity;
import com.app.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepository;
	

	@Override
	public ResponseDTO addUser(UserRequestDTO u) {
		ModelMapper map = new ModelMapper();
		UserEntity user = map.map(u, UserEntity.class);
		UserEntity addedUser = userRepository.save(user);
		ResponseDTO resp  = new ResponseDTO();
		resp.setStatus(true);
		resp.setData(addedUser);
		return resp;
	}
	

}
