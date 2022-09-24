package com.example.springcaching.service;

import com.example.springcaching.dto.DepartmentDto;
import com.example.springcaching.entity.Department;
import com.example.springcaching.repository.DepartmentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    DepartmentRepository departmentRepository;

    @Override
    public List<DepartmentDto> getAllDepartments() {
        return departmentRepository
                .findAll()
                .stream()
                .map(DepartmentDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public DepartmentDto getDepartmentById(String id) {
        return new DepartmentDto(departmentRepository.findById(id).orElse(null));
    }
}
