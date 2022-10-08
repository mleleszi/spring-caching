package com.example.springcaching.service;

import com.example.springcaching.dto.SalaryDto;
import com.example.springcaching.entity.Employee;
import com.example.springcaching.entity.Salary;
import com.example.springcaching.exception.NoSuchEntityException;
import com.example.springcaching.repository.EmployeeRepository;
import com.example.springcaching.repository.SalaryRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class SalaryServiceImpl implements SalaryService {

    SalaryRepository salaryRepository;
    EmployeeRepository employeeRepository;
    EmployeeService employeeService;

    @Override
    public SalaryDto getCurrentSalaryByEmployeeId(Integer id) {
        return new SalaryDto(salaryRepository.findCurrentSalaryByEmployeeId(id));
    }

    @Override
    @CacheEvict(value = "employees", key = "#id")
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

    @Override
    @Cacheable
    public Long getSumOfSalaries() {
         return employeeService
                    .getAllIds()
                    .stream()
                    .map(id -> Long.valueOf(getCurrentSalaryByEmployeeId(id).getSalary()))
                    .reduce(0L, Long::sum);
    }

    @Override
    @Cacheable("avgSalary")
    public Double getAverageSalary() {
        return employeeService
                .getAllIds()
                .stream()
                .map(id -> getCurrentSalaryByEmployeeId(id).getSalary())
                .mapToInt(Integer::intValue)
                .average()
                .orElse(Double.NaN);
    }

    @Override
    @Cacheable("bonus")
    public Double calculateBonus(Double rating) {
        log.info("SalaryService::calculateBonus");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return rating * 10;
    }


}
