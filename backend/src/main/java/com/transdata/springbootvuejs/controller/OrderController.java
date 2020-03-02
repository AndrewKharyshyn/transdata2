package com.transdata.springbootvuejs.controller;

import com.transdata.springbootvuejs.domain.*;
import com.transdata.springbootvuejs.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private AgencyController agencyController;
    @Autowired
    private ManagerController managerController;
    @Autowired
    private PayerController payerController;
    @Autowired
    private LanguageController languageController;
    @Autowired
    private TopicController topicController;

    @RequestMapping(path = "/saveOrder", method = RequestMethod.POST)
//    public String saveOrder(@RequestBody Order order) {
    public String saveOrder(@RequestParam("agency") int agencyId,
                            @RequestParam("manager") int managerId,
                            @RequestParam("payer") int payerId,
                            @RequestParam("langPair") int langPairId,
                            @RequestParam("topic") int topicId,
                            @RequestBody Order order) {
        Manager manager = managerController.getManagerById(managerId);
        Payer payer = payerController.getPayerById(payerId);
        LangPair langPair = languageController.getLanguageById(langPairId);
        Topic topic = topicController.getTopicById(topicId);
        Agency agency = agencyController.getAgencyById(agencyId);

        order.setAgency(agency);
        order.setManager(manager);
        order.setPayer(payer);
        order.setLangPair(langPair);
        order.setTopic(topic);

        orderRepository.save(order);
        return order.getOrderCode();
    }

    @RequestMapping(path = "/api/getAllOrders", method = RequestMethod.GET)
    public List<Order> selectAllOrders() {
        List<Order> orders = orderRepository
                .findAll();
        return orders;
    }

    @GetMapping(path = "/order/{id}")
    public Order getOrderById(@PathVariable("id") Integer id) {
        return orderRepository.getOne(id);
    }
}
