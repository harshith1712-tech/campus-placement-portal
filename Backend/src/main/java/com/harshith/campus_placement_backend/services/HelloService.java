package com.harshith.campus_placement_backend.services;

import org.springframework.stereotype.Service;
import com.harshith.campus_placement_backend.model.Student;

@Service
public class HelloService {
    public Student getStudent() {
        Student student = new Student();
        student.setName("Harshith");
        student.setEmail("harshith@gmail.com");

        return student;
    }
}
