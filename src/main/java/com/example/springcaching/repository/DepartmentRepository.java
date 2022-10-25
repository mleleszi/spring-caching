package com.example.springcaching.repository;

import com.example.springcaching.entity.Department;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.QueryHint;
import java.util.List;

import static org.hibernate.jpa.QueryHints.HINT_CACHEABLE;

public interface DepartmentRepository extends JpaRepository<Department, String> {

    @QueryHints( value = { @QueryHint(name = HINT_CACHEABLE, value = "true")})
    List<Department> findAllBy();

}
