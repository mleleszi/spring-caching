package com.example.springcaching.dto;

import com.example.springcaching.entity.Department;
import com.example.springcaching.entity.DeptEmp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeptEmpDto implements Serializable {
    private String deptId;
    private String deptName;
    private LocalDate fromDate;
    private LocalDate toDate;

    public DeptEmpDto(DeptEmp deptEmp) {
        this.deptId = deptEmp.getDepartment().getId();
        this.deptName = deptEmp.getDepartment().getDeptName();
        this.fromDate = deptEmp.getFromDate();
        this.toDate = deptEmp.getToDate();
    }
}
