package com.example.springcaching.entity;

import com.example.springcaching.entity.ids.TitleId;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "titles")
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Title {
    @EmbeddedId
    private TitleId id;
    @MapsId("empNo")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "emp_no")
    private Employee employee;

    @Column(name = "to_date")
    private LocalDate toDate;

    public LocalDate getToDate() {
        return toDate;
    }

    public void setToDate(LocalDate toDate) {
        this.toDate = toDate;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public TitleId getId() {
        return id;
    }

    public void setId(TitleId id) {
        this.id = id;
    }

}
