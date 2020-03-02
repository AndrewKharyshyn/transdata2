package com.transdata.springbootvuejs.controller;

import com.transdata.springbootvuejs.domain.Topic;
import com.transdata.springbootvuejs.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/api")
public class TopicController {

    @Autowired
    private TopicRepository topicRepository;

//    @RequestMapping(path = "/addAgency", method = RequestMethod.POST)
//    public String addAgency(@RequestBody Agency agency) {
//        agencyRepository.save(agency);
//        return agency.getAgencyName();
//    }

    @RequestMapping(path = "/getAllTopics", method = RequestMethod.GET)
    public List<Topic> selectAllPairs (){
        List<Topic> topics = topicRepository
                .findAll();
        return topics;
    }

    Topic getTopicById(int id) {
        Topic topic = topicRepository
                .findAll()
                .stream()
                .filter(v -> v.getTopicId() == id)
                .findFirst()
                .get();
        return topic;
    }
}
