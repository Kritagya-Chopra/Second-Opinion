package com.app.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BlogDTO {
	private String title;
	private String content;
	private LocalDateTime publishDate;
	@JsonProperty(access = Access.READ_ONLY)
	private String name;
}
