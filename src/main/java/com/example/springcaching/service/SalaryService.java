package com.example.springcaching.service;

import com.example.springcaching.dto.SalaryDto;

import java.util.List;

public interface SalaryService {
    SalaryDto getCurrentSalaryByEmployeeId(Integer id);
    SalaryDto modifySalary(Integer id,
                        Integer increaseAmount,
                        Integer decreaseAmount);
    Long getSumOfSalaries();
    Double getAverageSalary();
    Double calculateBonus(Double rating);
    List<SalaryDto> getAllSalaries(int page, int size);
}

