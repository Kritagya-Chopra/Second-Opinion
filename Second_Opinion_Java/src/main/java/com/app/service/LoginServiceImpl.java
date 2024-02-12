package com.app.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.repository.LoginRepository;
import com.app.entity.Login;
@Service
@Transactional
public class LoginServiceImpl implements LoginService {

	@Autowired
	private LoginRepository lDao; 
	@Override
	public Login validateUser(Login user) {
		// TODO Auto-generated method stub
		System.out.println(user.getUser());
		Login u=lDao.findByUser(user.getUser());
		if(u!=null) {
			if(u.getPassword().equals(user.getPassword())) {
				return u;
			}
		}
		return null;
	}

}
