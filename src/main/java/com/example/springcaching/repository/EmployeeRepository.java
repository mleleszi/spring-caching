package com.example.springcaching.repository;

import com.example.springcaching.entity.Employee;
import com.example.springcaching.entity.Salary;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.QueryHint;
import java.util.List;

import static org.hibernate.jpa.QueryHints.HINT_CACHEABLE;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query(value = "select emp_no from employees", nativeQuery = true)
    List<Integer> findAllIds();

    @QueryHints( value = { @QueryHint(name = HINT_CACHEABLE, value = "true")})
    List<Employee> findAllBy(Pageable pageable);
}
