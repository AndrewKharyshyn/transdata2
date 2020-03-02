package com.transdata.springbootvuejs.repository;

import com.transdata.springbootvuejs.domain.Payer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayerRepository extends JpaRepository<Payer, Integer> {

}
