package com.example.springcaching.service;

import com.example.springcaching.repository.SalaryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SalaryServiceImpl implements SalaryService {

    SalaryRepository salaryRepository;

    @Override
    public Integer getCurrentSalaryByEmployeeId(Integer id) {
        return salaryRepository.findCurrentSalaryByEmployeeId(id);
    }
}
