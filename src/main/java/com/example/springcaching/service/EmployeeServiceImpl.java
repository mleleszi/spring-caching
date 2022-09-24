package com.example.springcaching.service;

import com.example.springcaching.dto.EmployeeDto;
import com.example.springcaching.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    EmployeeRepository employeeRepository;

    @Override
    public List<EmployeeDto> getEmployees(int page, int size) {
        return employeeRepository
                .findAll(PageRequest.of(page, size))
                .stream()
                .map(EmployeeDto::new)
                .limit(10000)
                .collect(Collectors.toList());
    }
}
