package com.transdata.springbootvuejs.repository;

import com.transdata.springbootvuejs.domain.Agency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgencyRepository extends JpaRepository<Agency, Integer> {
    Agency getOne(int agencyId);
}
