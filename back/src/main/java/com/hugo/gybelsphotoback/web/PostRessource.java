package com.hugo.gybelsphotoback.web;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hugo.gybelsphotoback.domain.Post;
import com.hugo.gybelsphotoback.service.PostService;
import com.hugo.gybelsphotoback.service.StorageService;

@RestController
@RequestMapping("/api")
public class PostRessource {

	@Autowired
	StorageService storageService;

	@Autowired
	PostService postService;

	@GetMapping(value = "/post/{id}")
	public ResponseEntity<Post> getPostById (@PathVariable Long id) {
		Post post = postService.findById(id);
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.setContentType(MediaType.APPLICATION_JSON);
		responseHeaders.add("Access-Control-Allow-Origin", "*");
		return new ResponseEntity<>(post, responseHeaders, HttpStatus.OK);
	}

	@GetMapping(value = "/post")
	public ResponseEntity<Post> getLastPost () {
		Post post = postService.findLastPost();
		return new ResponseEntity<>(post, HttpStatus.OK);
	}

	@PostMapping(value = "/post")
	public ResponseEntity uploadPost (@RequestBody Post post) {
		postService.savePost(post);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PostMapping(value = "/image")
	public ResponseEntity uploadPhoto (@RequestParam("file") MultipartFile file) {
		try {
			storageService.store(file);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping(value = "/image/{postId}", produces = MediaType.IMAGE_JPEG_VALUE)
	public void getImage(@PathVariable Long postId, HttpServletResponse response) throws IOException {
		String url = postService.findById(postId).getUrl();
		FileSystemResource imgFile = new FileSystemResource(url);
		response.setContentType(MediaType.IMAGE_JPEG_VALUE);
		IOUtils.copy(imgFile.getInputStream(), response.getOutputStream());
	}

}
