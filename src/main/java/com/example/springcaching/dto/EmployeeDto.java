package com.example.springcaching.dto;

import com.example.springcaching.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto implements Serializable {
    private Integer id;
    private LocalDate birthDate;
    private String firstName;
    private String lastName;
    private String gender;
    private LocalDate hireDate;
    private List<DeptEmpDto> departments;
    private List<SalaryDto> salaries;

    public EmployeeDto(Employee employee) {
        this.id = employee.getId();
        this.birthDate = employee.getBirthDate();
        this.firstName = employee.getFirstName();
        this.lastName = employee.getLastName();
        this.gender = employee.getGender();
        this.hireDate = employee.getHireDate();
        this.departments = employee
                .getDeptEmps()
                .stream()
                .map(DeptEmpDto::new)
                .collect(Collectors.toList());
        this.salaries = employee
                .getSalaries()
                .stream()
                .map(SalaryDto::new)
                .collect(Collectors.toList());
    }
}
