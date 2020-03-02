package com.transdata.springbootvuejs.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "orderId")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "orders")
public class Order implements Serializable {
    private Integer orderId;
    private String orderCode;
    private Agency agency;
    private String description;
    private Topic topic;
    private Integer pricePerPage;
    private Double pageCount;
    private Integer symbolCount;
    private Integer totalCost;
    private Date orderDate;
    private Date paymentDate;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Calendar finishTime;
    private String incomingNumber;
    private Status status;
    private String comments;
    private String customerName;
    private Integer orderType;
    //private User createdBy;
    //private User lastModifiedBy;
    private Calendar createdDate;
    private Calendar lastModifiedDate;
    private Payer payer;
    private LangPair langPair;
    private Manager manager;

    @Id()
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    @Column(name = "order_code")
    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "agency_id")
    public Agency getAgency() {
        return agency;
    }

    public void setAgency(Agency agency) {
        this.agency = agency;
    }

    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "symbol_count")
    public Integer getSymbolCount() {
        return symbolCount;
    }

    public void setSymbolCount(Integer symbolCount) {
        this.symbolCount = symbolCount;
    }

    @Column(name = "page_count")
    public Double getPageCount() {
        return pageCount;
    }

    public void setPageCount(Double pageCount) {
        this.pageCount = pageCount;
    }

    @Column(name = "price_per_page")
    public int getPricePerPage() {
        return pricePerPage;
    }

    public void setPricePerPage(int pricePerPage) {
        this.pricePerPage = pricePerPage;
    }

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "lang_pair_id")
    public LangPair getLangPair() {
        return langPair;
    }

    public void setLangPair(LangPair langPair) {
        this.langPair = langPair;
    }

    @Column(name = "order_date")
    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    @Column(name = "finish_time")
    public Calendar getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(Calendar finishTime) {
        this.finishTime = finishTime;
    }

    @Column(name = "incoming_number")
    public String getIncomingNumber() {
        return incomingNumber;
    }

    public void setIncomingNumber(String incomingNumber) {
        this.incomingNumber = incomingNumber;
    }

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "topic_id")
    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "manager_id")
    public Manager getManager() {
        return manager;
    }

    public void setManager(Manager manager) {
        this.manager = manager;
    }

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "status_id")
    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Column(name = "payment_date")
    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "payer_id")
    public Payer getPayer() {
        return payer;
    }

    public void setPayer(Payer payer) {
        this.payer = payer;
    }

    @Column(name = "comments")
    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    @Column(name = "customer_name")
    public String getCustomerName() {
        return customerName;
    }

    @Column(name = "price_per_page")
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public void setPricePerPage(Integer pricePerPage) {
        this.pricePerPage = pricePerPage;
    }

    @Column(name = "total_cost")
    public Integer getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Integer totalCost) {
        this.totalCost = totalCost;
    }

    @Column(name = "order_type")
    public Integer getOrderType() {
        return orderType;
    }

    public void setOrderType(Integer orderType) {
        this.orderType = orderType;
    }

//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
//    @JoinColumn(name = "user_id")
//    public User getCreatedBy() {
//        return createdBy;
//    }
//
//    public void setCreatedBy(User createdBy) {
//        this.createdBy = createdBy;
//    }

    //@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    //@JoinColumn(name = "user_id")
//    public User getLastModifiedBy() {
//        return lastModifiedBy;
//    }
//
//    public void setLastModifiedBy(User lastModifiedBy) {
//        this.lastModifiedBy = lastModifiedBy;
//    }

    @Column(name = "created_date")
    public Calendar getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Calendar createdDate) {
        this.createdDate = createdDate;
    }

    @Column(name = "last_modified_date")
    public Calendar getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(Calendar lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    public Order() {
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", orderCode='" + orderCode + '\'' +
                ", agency=" + agency +
                ", description='" + description + '\'' +
                ", topic=" + topic +
                ", pricePerPage=" + pricePerPage +
                ", pageCount=" + pageCount +
                ", symbolCount=" + symbolCount +
                ", totalCost=" + totalCost +
                ", orderDate=" + orderDate +
                ", paymentDate=" + paymentDate +
                ", finishTime=" + finishTime +
                ", incomingNumber='" + incomingNumber + '\'' +
                ", status=" + status +
                ", comments='" + comments + '\'' +
                ", customerName='" + customerName + '\'' +
                ", orderType=" + orderType +
                ", createdDate=" + createdDate +
                ", lastModifiedDate=" + lastModifiedDate +
                ", payer=" + payer +
                ", langPair=" + langPair +
                ", manager=" + manager +
                '}';
    }
}