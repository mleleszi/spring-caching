package com.example.springcaching.controller;

import com.example.springcaching.dto.SalaryDto;
import com.example.springcaching.service.SalaryService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/bonus/{rating}")
    public ResponseEntity<Double> calculateBonus(@PathVariable Double rating) {
        return ResponseEntity.ok(salaryService.calculateBonus(rating));
    }

    @GetMapping("")
    public ResponseEntity<List<SalaryDto>> getAllSalaries(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10000") int size
    ) {
        return ResponseEntity.ok(salaryService.getAllSalaries(page, size));
    }
}
