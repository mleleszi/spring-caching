package com.example.springcaching.dto;

import com.example.springcaching.entity.Department;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DepartmentDto {
    private String id;
    private String name;

    public DepartmentDto(Department department) {
        this.id = department.getId();
        this.name = department.getDeptName();
    }
}
