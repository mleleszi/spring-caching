package com.example.springcaching.controller;

import com.example.springcaching.dto.EmployeeDto;
import com.example.springcaching.dto.SalaryDto;
import com.example.springcaching.entity.Employee;
import com.example.springcaching.repository.EmployeeRepository;
import com.example.springcaching.repository.SalaryRepository;
import com.example.springcaching.service.EmployeeService;
import com.example.springcaching.service.SalaryService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {

    EmployeeService employeeService;
    SalaryService salaryService;

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getEmployees(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10000") int size) {
        return ResponseEntity.ok(employeeService.getEmployees(page, size));
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable Integer id) {
        return ResponseEntity.ok(employeeService.getEmployeeById(id));
    }

    @GetMapping("/{id}/currentsalary")
    public ResponseEntity<Integer> getCurrentSalaryById(@PathVariable Integer id) {
        return ResponseEntity.ok(salaryService.getCurrentSalaryByEmployeeId(id).getSalary());
    }

    @PatchMapping("/{id}/modifysalary")
    public ResponseEntity<SalaryDto> modifySalary(
            @PathVariable Integer id,
            @RequestParam(required = false) Integer increaseAmount,
            @RequestParam(required = false) Integer decreaseAmount
            ){
        return ResponseEntity.ok(salaryService.modifySalary(id, increaseAmount, decreaseAmount));
    }
}

