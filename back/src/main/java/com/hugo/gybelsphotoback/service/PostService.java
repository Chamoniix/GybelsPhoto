package com.hugo.gybelsphotoback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.hugo.gybelsphotoback.domain.Post;
import com.hugo.gybelsphotoback.repository.PostRepository;


@Service
public class PostService {

	@Autowired
	private PostRepository postRepository;
	
	public Post findById(Long id) {
		return postRepository.getOne(id);
	}

	public Post findLastPost() {
		List<Post> posts = postRepository.findAll();
		if (posts.size() > 0)
			return posts.get(0);
		else
			return null;
	}
	
}
