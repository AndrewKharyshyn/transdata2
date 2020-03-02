package com.transdata.springbootvuejs.controller;

import com.transdata.springbootvuejs.domain.Manager;
import com.transdata.springbootvuejs.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/api")
public class ManagerController {

    @Autowired
    private ManagerRepository managerRepository;

//    @RequestMapping(path = "/addAgency", method = RequestMethod.POST)
//    public String addAgency(@RequestBody Agency agency) {
//        agencyRepository.save(agency);
//        return agency.getAgencyName();
//    }

    @RequestMapping(path = "/getAllManagers", method = RequestMethod.GET)
    public List<Manager> selectAllManagers (){
        List<Manager> managers = managerRepository
                .findAll();
        return managers;
    }

    Manager getManagerById(int id) {
        Manager manager = managerRepository
                .findAll()
                .stream()
                .filter(v -> v.getManagerId() == id)
                .findFirst()
                .get();
        return manager;
    }

//    @RequestMapping(path = "/getAgencyManagers/{agency}", method = RequestMethod.GET)
//    public List<Manager> selectAgencyManagers (@PathVariable("agency") String agency){
//        List<Manager> managers = selectAllManagers()
//                .stream()
//                .filter(v -> v.ge)
//        return managers;
//    }
}
