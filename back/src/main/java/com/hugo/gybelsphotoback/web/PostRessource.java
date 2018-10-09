package com.hugo.gybelsphotoback.web;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hugo.gybelsphotoback.domain.Post;
import com.hugo.gybelsphotoback.service.PostService;

@RestController
@RequestMapping("/api")
public class PostRessource {

	@Autowired
	PostService postService;

	@GetMapping(value = "/post/{id}")
    public ResponseEntity<Post> getpostById (@PathVariable Long id) {
        Post post = postService.findById(id);


        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setContentType(MediaType.APPLICATION_JSON);
        responseHeaders.add("Access-Control-Allow-Origin", "*");
        return new ResponseEntity<>(post, responseHeaders, HttpStatus.OK);
    }

    @GetMapping(value = "/image", produces = MediaType.IMAGE_JPEG_VALUE)
	public void getImage(HttpServletResponse response) throws IOException {
	        ClassPathResource imgFile = new ClassPathResource("img/wallhaven-680441.jpg");
	        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
			IOUtils.copy(imgFile.getInputStream(), response.getOutputStream());
	    }

}
