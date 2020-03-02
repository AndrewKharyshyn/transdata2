package com.transdata.springbootvuejs.controller;

import com.transdata.springbootvuejs.domain.LangPair;
import com.transdata.springbootvuejs.repository.LanguageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/api")
public class LanguageController {

    @Autowired
    private LanguageRepository languageRepository;

//    @RequestMapping(path = "/addAgency", method = RequestMethod.POST)
//    public String addAgency(@RequestBody Agency agency) {
//        agencyRepository.save(agency);
//        return agency.getAgencyName();
//    }

    @RequestMapping(path = "/getLangPairs", method = RequestMethod.GET)
    public List<LangPair> selectAllPairs (){
        List<LangPair> langPairs = languageRepository
                .findAll();
        return langPairs;
    }

    LangPair getLanguageById(int id) {
        LangPair langPair = languageRepository
                .findAll()
                .stream()
                .filter(v -> v.getLangPairId() == id)
                .findFirst()
                .get();
        return langPair;
    }
}
