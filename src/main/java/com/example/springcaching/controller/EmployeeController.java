package com.example.springcaching.controller;

import com.example.springcaching.dto.EmployeeDto;
import com.example.springcaching.entity.Employee;
import com.example.springcaching.repository.EmployeeRepository;
import com.example.springcaching.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class EmployeeController {

    EmployeeService employeeService;

    @GetMapping("/")
    public ResponseEntity<List<EmployeeDto>> getEmployees(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10000") int size) {
        return ResponseEntity.ok(employeeService.getEmployees(page, size));
    }
}
