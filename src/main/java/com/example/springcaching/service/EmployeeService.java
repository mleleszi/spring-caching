package com.example.springcaching.service;

import com.example.springcaching.dto.EmployeeDto;
import com.example.springcaching.entity.Employee;
import jdk.jfr.Percentage;

import java.util.List;

public interface EmployeeService {
    List<EmployeeDto> getEmployees(int page, int size);
    EmployeeDto getEmployeeById(Integer id);
    boolean existsById(Integer id);
    List<Integer> getAllIds();
}
