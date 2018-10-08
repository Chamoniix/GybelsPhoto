package com.hugo.gybelsphotoback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.hugo.gybelsphotoback.domain.Post;
import com.hugo.gybelsphotoback.repository.PostRepository;


@Service
public class PostService {

	@Autowired
	private PostRepository postRepository;
	
	public Post findById(Long id) {
		//return postRepository.findOne(id);
		Post post = new Post();
		post.setAuteur("Hugo");
		post.setDescription("ALL YOU ALWAY SAY IS BLA BLA BLA");
		post.setTitre("TIRE");
		
		return post;
	}
	
	
}
