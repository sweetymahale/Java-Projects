package com.sweeetycodes.studentsystem.service;

import com.sweeetycodes.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
