package com.example.springcaching.service;

import com.example.springcaching.dto.SalaryDto;
import com.example.springcaching.entity.Salary;
import com.example.springcaching.exception.NoSuchEntityException;
import com.example.springcaching.repository.EmployeeRepository;
import com.example.springcaching.repository.SalaryRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class SalaryServiceImpl implements SalaryService {

    private SalaryRepository salaryRepository;
    private EmployeeRepository employeeRepository;
    private EmployeeService employeeService;

    @Override
    @Cacheable(value="currentsalaries", key = "#id")
    public SalaryDto getCurrentSalaryByEmployeeId(Integer id) {
        return new SalaryDto(salaryRepository.findCurrentSalaryByEmployeeId(id));
    }

    @Override
    @CacheEvict(value = "employees", key = "#id")
    @CachePut(value="currentsalaries", key = "#id")
    public SalaryDto modifySalary(Integer id,
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
            return new SalaryDto(salary);
        } else if (decreaseAmount != null) {
            salary.setSalary(salary.getSalary() - decreaseAmount);
            salaryRepository.save(salary);
            return new SalaryDto(salary);
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

    @Override
    public List<SalaryDto> getAllSalaries(int page, int size) {
        return salaryRepository
                .findAllBy(PageRequest.of(page, size))
                .stream()
                .map(SalaryDto::new)
                .collect(Collectors.toList());
    }
}
