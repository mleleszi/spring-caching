package com.example.springcaching.repository;

import com.example.springcaching.entity.Salary;
import com.example.springcaching.entity.ids.SalaryId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SalaryRepository extends JpaRepository<Salary, SalaryId> {

    @Query( value = "select salary from salaries where emp_no = :emp_id" +
                   "and from_date = (select max(from_date) from salaries where emp_no = :emp_id)",
            nativeQuery = true)
    Integer findCurrentSalaryByEmployeeId(@Param(value = "emp_id") Integer employeeId);
}
