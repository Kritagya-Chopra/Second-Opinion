package com.app.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.UserRequestDTO;
import com.app.entity.UserEntity;
import com.app.repository.LoginRepository;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

	@Autowired
	private LoginRepository lDao; 
	
	@Override
	public UserEntity validateUser(UserRequestDTO user) {
		// TODO Auto-generated method stub
		
		UserEntity u=lDao.findByUserName(user.getUserName());
		if(u!=null) {
			if(u.isValid()) {
				if(u.getPassword().equals(user.getPassword())) {
					return u;
				}
			}
		}
		return null;
	}

}
