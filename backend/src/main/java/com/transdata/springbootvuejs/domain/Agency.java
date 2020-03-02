package com.transdata.springbootvuejs.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "agencies")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "agencyId")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Agency implements Serializable {

    private Integer agencyId;
    private String agencyName;
    private String city;
    private String address;
    private String email;
    private String phone;
    private String mobile;
    private Integer defaultPricePerPage;
    private Integer defaultPricePerDay;
    private Integer defaultPageChars;
    private String viber;
    private String skype;
    private String telegram;
    private String website;
    private String prefix;
    private String logoPath;
    private String comments;
    //@DateTimeFormat(pattern = "yyyy-MM-dd")
    //private Date addingDate;
    private Set<Order> orders = new HashSet<>();
    private Set<Manager> managers = new HashSet<>();
    private Set<Payer> payers = new HashSet<>();

    @Id()
    @Column(name = "agency_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getAgencyId() {
        return agencyId;
    }

    public void setAgencyId(Integer agencyId) {
        this.agencyId = agencyId;
    }

    @Column(name = "agency_name")
    public String getAgencyName() {
        return agencyName;
    }

    public void setAgencyName(String agencyName) {
        this.agencyName = agencyName;
    }

    @Column(name = "phone")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "city")
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Column(name = "address")
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Column(name = "website")
    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    @Column(name = "prefix")
    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    @Column(name = "mobile")
    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    @Column(name = "default_price_per_page")
    public Integer getDefaultPricePerPage() {
        return defaultPricePerPage;
    }

    public void setDefaultPricePerPage(Integer defaultPricePerPage) {
        this.defaultPricePerPage = defaultPricePerPage;
    }

    @Column(name = "default_price_per_day")
    public Integer getDefaultPricePerDay() {
        return defaultPricePerDay;
    }

    public void setDefaultPricePerDay(Integer defaultPricePerDay) {
        this.defaultPricePerDay = defaultPricePerDay;
    }

    @Column(name = "default_page_chars")
    public Integer getDefaultPageChars() {
        return defaultPageChars;
    }

    public void setDefaultPageChars(Integer defaultPageChars) {
        this.defaultPageChars = defaultPageChars;
    }

    @Column(name = "viber")
    public String getViber() {
        return viber;
    }

    public void setViber(String viber) {
        this.viber = viber;
    }

    @Column(name = "skype")
    public String getSkype() {
        return skype;
    }

    public void setSkype(String skype) {
        this.skype = skype;
    }

    @Column(name = "telegram")
    public String getTelegram() {
        return telegram;
    }

    public void setTelegram(String telegram) {
        this.telegram = telegram;
    }

    @Column(name = "comments")
    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    @Column(name = "logo_path")
    public String getLogoPath() {
        return logoPath;
    }

    public void setLogoPath(String logoPath) {
        this.logoPath = logoPath;
    }

    @OneToMany(mappedBy = "agency", cascade = CascadeType.ALL)
    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    @OneToMany(mappedBy = "agency", cascade = CascadeType.ALL)
    public Set<Manager> getManagers() {
        return managers;
    }

    public void setManagers(Set<Manager> managers) {
        this.managers = managers;
    }

    @OneToMany(mappedBy = "agency", cascade = CascadeType.ALL)
    public Set<Payer> getPayers() {
        return payers;
    }

    public void setPayers(Set<Payer> payers) {
        this.payers = payers;
    }

    public Agency() {
    }

    @Override
    public String toString() {
        return "Agency{" +
                "agencyId=" + agencyId +
                ", agencyName='" + agencyName + '\'' +
                ", city='" + city + '\'' +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", mobile='" + mobile + '\'' +
                ", defaultPricePerPage=" + defaultPricePerPage +
                ", defaultPricePerDay=" + defaultPricePerDay +
                ", defaultPageChars=" + defaultPageChars +
                ", viber='" + viber + '\'' +
                ", skype='" + skype + '\'' +
                ", telegram='" + telegram + '\'' +
                ", website='" + website + '\'' +
                ", prefix='" + prefix + '\'' +
                ", logoPath='" + logoPath + '\'' +
                ", comments='" + comments + '\'' +
                ", orders=" + orders +
                ", managers=" + managers +
                ", payers=" + payers +
                '}';
    }
}