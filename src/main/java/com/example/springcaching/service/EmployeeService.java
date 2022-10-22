package com.example.springcaching.service;

import com.example.springcaching.dto.EmployeeDto;
import com.example.springcaching.dto.UpdateEmployeeNameDto;


import java.util.List;

public interface EmployeeService {
    List<EmployeeDto> getEmployees(int page, int size);
    EmployeeDto getEmployeeById(Integer id);
    boolean existsById(Integer id);
    List<Integer> getAllIds();
    EmployeeDto updateEmployeeName(Integer id, UpdateEmployeeNameDto updateEmployeeNameDto);
}
