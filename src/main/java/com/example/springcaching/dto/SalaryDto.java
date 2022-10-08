package com.example.springcaching.dto;

import com.example.springcaching.entity.Salary;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalaryDto implements Serializable {
    private Integer salary;
    private LocalDate fromDate;
    private LocalDate toDate;

    public SalaryDto(Salary salary) {
        this.salary = salary.getSalary();
        this.fromDate = salary.getId().getFromDate();
        this.toDate = salary.getToDate();
    }
}
