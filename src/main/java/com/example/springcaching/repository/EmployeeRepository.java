package com.example.springcaching.repository;

import com.example.springcaching.dto.EmployeeDto;
import com.example.springcaching.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query(value = "select emp_no from employees", nativeQuery = true)
    List<Integer> findAllIds();
}
