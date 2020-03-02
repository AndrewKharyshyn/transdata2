package com.transdata.springbootvuejs.repository;

import com.transdata.springbootvuejs.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    List<User> findByName(@Param("name") String name);
    List<User> findBySurname(@Param("surname") String surname);
}
