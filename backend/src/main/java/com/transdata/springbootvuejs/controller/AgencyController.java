package com.transdata.springbootvuejs.controller;

import com.transdata.springbootvuejs.domain.Agency;
import com.transdata.springbootvuejs.repository.AgencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api")
public class AgencyController {

    @Autowired
    private AgencyRepository agencyRepository;

    @GetMapping(path = "/agency/{id}")
    public Agency getAgencyById(@PathVariable("id") Integer id) {
        Agency agency = agencyRepository.getOne(id);
        return agency;
    }

    @RequestMapping(path = "/getAllAgencies", method = RequestMethod.GET)
    public List<Agency> getAllAgencies() {
        List<Agency> agencies = agencyRepository
                .findAll();
        return agencies;
    }
}
