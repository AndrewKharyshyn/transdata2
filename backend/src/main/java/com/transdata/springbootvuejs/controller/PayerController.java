package com.transdata.springbootvuejs.controller;

import com.transdata.springbootvuejs.domain.Payer;
import com.transdata.springbootvuejs.repository.PayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/api")
public class PayerController {

    @Autowired
    private PayerRepository payerRepository;

//    @RequestMapping(path = "/addAgency", method = RequestMethod.POST)
//    public String addAgency(@RequestBody Agency agency) {
//        agencyRepository.save(agency);
//        return agency.getAgencyName();
//    }

    @RequestMapping(path = "/getAllPayers", method = RequestMethod.GET)
    public List<Payer> selectAllPayers (){
        List<Payer> payers = payerRepository
                .findAll();
        return payers;
    }

    Payer getPayerById(int id) {
        Payer payer = payerRepository
                .findAll()
                .stream()
                .filter(v -> v.getPayerId() == id)
                .findFirst()
                .get();
        return payer;
    }
}
