package com.example.springcaching.service;

import com.example.springcaching.dto.SalaryDto;

public interface SalaryService {
    SalaryDto getCurrentSalaryByEmployeeId(Integer id);
    String modifySalary(Integer id,
                        Integer increaseAmount,
                        Integer decreaseAmount);
}
