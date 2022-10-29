package com.example.springcaching.service;

import com.example.springcaching.dto.EmployeeDto;
import com.example.springcaching.dto.UpdateEmployeeNameDto;
import com.example.springcaching.entity.Employee;
import com.example.springcaching.exception.NoSuchEntityException;
import com.example.springcaching.repository.EmployeeRepository;
import jdk.jfr.Percentage;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.EmptyResultDataAccessException;
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
    @Cacheable("employees")
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

        Employee employee = employeeRepository
                                .findById(id)
                                .orElseThrow(() -> new NoSuchEntityException(id));

        return new EmployeeDto(employee);
    }

    @Override
    public boolean existsById(Integer id) {
        return employeeRepository.existsById(id);
    }

    @Override
    public List<Integer> getAllIds() {
        return employeeRepository.findAllIds();
    }

    @Override
    @CachePut(value="employees", key="#id")
    public EmployeeDto updateEmployeeName(Integer id, UpdateEmployeeNameDto updateEmployeeNameDto) {
        log.info("EmployeeService::updateEmployeeName");
        Employee employee = employeeRepository
                                .findById(id)
                                .orElseThrow(() -> new NoSuchEntityException());

        employee.setFirstName(updateEmployeeNameDto.getFirstName());
        employee.setLastName(updateEmployeeNameDto.getLastName());

        employeeRepository.save(employee);

        return new EmployeeDto(employee);
    }

    @Override
    @CacheEvict(value = "employees", key="#id")
    public void deleteEmployeeById(Integer id) {
        log.info("EmployeeService::deleteEmployeeById");
        try {
            employeeRepository.deleteById(id);
        } catch (EmptyResultDataAccessException ex) {
            throw new NoSuchEntityException(id);
        }
    }
}
