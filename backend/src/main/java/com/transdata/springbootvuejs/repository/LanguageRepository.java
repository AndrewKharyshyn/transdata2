package com.transdata.springbootvuejs.repository;

import com.transdata.springbootvuejs.domain.LangPair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepository extends JpaRepository<LangPair, Integer> {

}
