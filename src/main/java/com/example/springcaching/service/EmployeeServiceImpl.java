package com.example.springcaching.service;

import com.example.springcaching.dto.EmployeeDto;
import com.example.springcaching.repository.EmployeeRepository;
import jdk.jfr.Percentage;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class EmployeeServiceImpl implements EmployeeService {

    EmployeeRepository employeeRepository;

    @Override
    public List<EmployeeDto> getEmployees(int page, int size) {
        log.info("EmployeeService::getEmployees");
        return employeeRepository
                .findAll(PageRequest.of(page, size))
                .stream()
                .map(EmployeeDto::new)
                .collect(Collectors.toList());
    }

    @Override
    @Cacheable(value="employees", key="#id")
    public EmployeeDto getEmployeeById(Integer id) {    
        log.info("EmployeeService::getEmployeeById");
        return new EmployeeDto(employeeRepository.findById(id).orElse(null));
    }

    @Override
    public boolean existsById(Integer id) {
        return employeeRepository.existsById(id);
    }

    @Override
    public List<Integer> getAllIds() {
        return employeeRepository.findAllIds();
    }
}
