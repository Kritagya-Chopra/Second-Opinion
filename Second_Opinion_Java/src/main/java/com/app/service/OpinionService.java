package com.app.service;

import com.app.dto.OpinionDTO;
import com.app.entity.OpinionEntity;

public interface OpinionService {

	OpinionDTO getOpinion(Long id);

	OpinionEntity saveOpinion(Long caseId, com.app.dto.OpinionDTO d);

	OpinionEntity updateOpinion(Long id, com.app.dto.OpinionDTO d);

	Boolean deleteOpinion(Long id);

}
