package com.example.springcaching.dto;

import com.example.springcaching.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {
    private Integer id;
    private LocalDate birthDate;
    private String firstName;
    private String lastName;
    private String gender;
    private LocalDate hireDate;
    private Set<DeptEmpDto> departments;

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
                .collect(Collectors.toSet());
    }
}
