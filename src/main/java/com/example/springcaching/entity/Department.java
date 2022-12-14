package com.example.springcaching.entity;

import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "departments")
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Department {
    @Id
    @Column(name = "dept_no", nullable = false, length = 4)
    private String id;

    @Column(name = "dept_name", nullable = false, length = 40)
    private String deptName;

    @org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @OneToMany(mappedBy = "department")
    private Set<DeptEmp> deptEmps = new LinkedHashSet<>();

    @org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @OneToMany(mappedBy = "department")
    private Set<DeptManager> deptManagers = new LinkedHashSet<>();

    public Set<DeptManager> getDeptManagers() {
        return deptManagers;
    }

    public void setDeptManagers(Set<DeptManager> deptManagers) {
        this.deptManagers = deptManagers;
    }

    public Set<DeptEmp> getDeptEmps() {
        return deptEmps;
    }

    public void setDeptEmps(Set<DeptEmp> deptEmps) {
        this.deptEmps = deptEmps;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
