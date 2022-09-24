package com.example.springcaching.service;

import com.example.springcaching.dto.EmployeeDto;
import com.example.springcaching.entity.Employee;

import java.util.List;

public interface EmployeeService {
    List<EmployeeDto> getEmployees(int page, int size);
}
