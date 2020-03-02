package com.transdata.springbootvuejs.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "payerId")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "payers")
public class Payer implements Serializable {

    private Integer payerId;
    private String payerName;
    private Agency agency;
    private Set<Order> orders = new HashSet<>();

    @Id()
    @Column(name = "payer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getPayerId() {
        return payerId;
    }

    public void setPayerId(Integer payerId) {
        this.payerId = payerId;
    }

    @Column(name = "payer_name", nullable = false)
    public String getPayerName() {
        return payerName;
    }

    public void setPayerName(String payerName) {
        this.payerName = payerName;
    }

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "agency_id")
    public Agency getAgency() {
        return agency;
    }

    public void setAgency(Agency agency) {
        this.agency = agency;
    }

    @OneToMany(mappedBy = "payer", cascade = CascadeType.ALL)
    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    public Payer() {
    }

    @Override
    public String toString() {
        return "Payer{" +
                "payerId=" + payerId +
                ", payerName='" + payerName + '\'' +
                ", agency=" + agency +
                ", orders=" + orders +
                '}';
    }
}
