package com.app.service;

import com.app.dto.UserRequestDTO;
import com.app.entity.UserEntity;

public interface LoginService {
	public UserEntity validateUser(UserRequestDTO user);
}
