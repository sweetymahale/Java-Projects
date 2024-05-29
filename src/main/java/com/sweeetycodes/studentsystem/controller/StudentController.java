package com.sweeetycodes.studentsystem.controller;

import com.sweeetycodes.studentsystem.model.Student;
import com.sweeetycodes.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

     @PostMapping("/add")
     public String add(@RequestBody Student student){
         studentService.saveStudent(student);
         return "New student is added";
    }
}
