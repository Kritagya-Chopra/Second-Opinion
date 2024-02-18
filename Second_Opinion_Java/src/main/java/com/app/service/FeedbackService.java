package com.app.service;

import java.util.List;

import com.app.dto.FeedbackDTO;

public interface FeedbackService {

	List<FeedbackDTO> getFeedbackByPatientId(Long id);

	List<FeedbackDTO> getFeedbackByDoctorId(Long id);

	FeedbackDTO getFeedbackById(Long id);

	FeedbackDTO createFeedback(FeedbackDTO feedback);

	Boolean deleteFeeback(Long id);

}
