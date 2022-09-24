package com.example.springcaching.repository;

import com.example.springcaching.dto.EmployeeDto;
import com.example.springcaching.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
