package com.transdata.springbootvuejs.repository;

import com.transdata.springbootvuejs.domain.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Integer> {

}
