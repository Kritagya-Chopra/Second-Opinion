package com.app.service;

import com.app.dto.ResponseDTO;
import com.app.dto.UserRequestDTO;
import com.app.entity.UserEntity;

public interface UserService {

	ResponseDTO addUser(UserRequestDTO u);

	ResponseDTO getUser(Long id);

}
