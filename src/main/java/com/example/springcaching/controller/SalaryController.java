package com.example.springcaching.controller;

import com.example.springcaching.service.SalaryService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/salary")
public class SalaryController {

    SalaryService salaryService;

    @GetMapping("/sum")
    public ResponseEntity<Long> getSum() {
        return ResponseEntity.ok(salaryService.getSumOfSalaries());
    }

    @GetMapping("/average")
    public ResponseEntity<Double> getAverage() {
        return ResponseEntity.ok(salaryService.getAverageSalary());
    }
}
