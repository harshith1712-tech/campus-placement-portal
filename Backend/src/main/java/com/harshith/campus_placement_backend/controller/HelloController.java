package com.harshith.campus_placement_backend.controller;

import com.harshith.campus_placement_backend.services.HelloService;
import com.harshith.campus_placement_backend.model.Student;
// we want to use HelloServices so we used the above line
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
// for restcontroller and getmapping we used the above import functions

@RestController
// in this spring creates a new object for the class without us manually doing
// it
// @SpringBootApplication contains @ComponentScan where it means Search the
// project for spring -managed classes
// so it finds the @restcontroleler and registers it
// tomcat intilizes the port 8000
public class HelloController {
    // when u type http://localhost:8080/api/hello ur browser sned GET /api/hello it
    // i scalled HTTP requestt
    private final HelloService helloService;

    // it says that the this controller needs a service
    public HelloController(HelloService helloService) {
        this.helloService = helloService;
    }

    // this is called constructor injection
    // Spring sees HelloController needs HelloService and automatically provides it
    @GetMapping("/api/hello")
    public Student getStudent() {
        return helloService.getStudent();
    }

}
