package com.example.springcaching.repository;

import com.example.springcaching.entity.Salary;
import com.example.springcaching.entity.ids.SalaryId;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.data.repository.query.Param;

import javax.persistence.QueryHint;
import java.util.List;

import static org.hibernate.jpa.QueryHints.HINT_CACHEABLE;

public interface SalaryRepository extends JpaRepository<Salary, SalaryId> {

    @Query( value = "select * from salaries where emp_no = :emp_id" +
                   " and from_date = (select max(from_date) from salaries where emp_no = :emp_id)",
            nativeQuery = true)
    Salary findCurrentSalaryByEmployeeId(@Param(value = "emp_id") Integer employeeId);

    @QueryHints( value = { @QueryHint(name = HINT_CACHEABLE, value = "true")})
    List<Salary> findAllBy(Pageable pageable);
}
