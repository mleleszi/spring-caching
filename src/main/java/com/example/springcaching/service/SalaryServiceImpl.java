package com.example.springcaching.service;

import com.example.springcaching.dto.SalaryDto;
import com.example.springcaching.entity.Employee;
import com.example.springcaching.entity.Salary;
import com.example.springcaching.exception.NoSuchEntityException;
import com.example.springcaching.repository.EmployeeRepository;
import com.example.springcaching.repository.SalaryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SalaryServiceImpl implements SalaryService {

    SalaryRepository salaryRepository;
    EmployeeRepository employeeRepository;

    @Override
    public SalaryDto getCurrentSalaryByEmployeeId(Integer id) {
        return new SalaryDto(salaryRepository.findCurrentSalaryByEmployeeId(id));
    }

    @Override
    public String modifySalary(Integer id,
                               Integer increaseAmount,
                               Integer decreaseAmount) {
        if (!employeeRepository.existsById(id))
            throw new NoSuchEntityException(id);

        Salary salary = salaryRepository.findCurrentSalaryByEmployeeId(id);

        if (increaseAmount != null && decreaseAmount != null) {
            throw new RuntimeException("You cannot increase and decrease at the same time!");
        } else if (increaseAmount != null) {
            salary.setSalary(salary.getSalary() + increaseAmount);
            salaryRepository.save(salary);
            return "Salary increased by " + increaseAmount;
        } else if (decreaseAmount != null) {
            salary.setSalary(salary.getSalary() - decreaseAmount);
            salaryRepository.save(salary);
            return "Salary decreased by " + decreaseAmount;
        }

        return null;
    }
}
