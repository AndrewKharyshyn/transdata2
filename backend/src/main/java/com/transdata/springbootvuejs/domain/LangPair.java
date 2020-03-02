package com.transdata.springbootvuejs.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "langPairId")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "langpairs")
public class LangPair implements Serializable {

    private Integer langPairId;
    private String sourceLang;
    private String targetLang;
    private String fullPairName;
    private String shortPairName;
    private Set<Order> orders = new HashSet<>();

    @Id()
    @Column(name = "lang_pair_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getLangPairId() {
        return langPairId;
    }

    public void setLangPairId(Integer langPairId) {
        this.langPairId = langPairId;
    }

    @Column(name = "target_lang")
    public String getTargetLang() {
        return targetLang;
    }

    public void setTargetLang(String targetLang) {
        this.targetLang = targetLang;
    }

    @Column(name = "full_pair_name")
    public String getFullPairName() {
        return fullPairName;
    }

    public void setFullPairName(String fullPairName) {
        this.fullPairName = fullPairName;
    }

    @Column(name = "short_pair_name")
    public String getShortPairName() {
        return shortPairName;
    }

    public void setShortPairName(String shortPairName) {
        this.shortPairName = shortPairName;
    }

    @Column(name = "source_lang")
    public String getSourceLang() {
        return sourceLang;
    }

    public void setSourceLang(String sourceLang) {
        this.sourceLang = sourceLang;
    }

    @OneToMany(mappedBy = "langPair", cascade = CascadeType.ALL)
    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    public LangPair() {
    }

    @Override
    public String toString() {
        return "LangPair{" +
                "langPairId=" + langPairId +
                ", sourceLang='" + sourceLang + '\'' +
                ", targetLang='" + targetLang + '\'' +
                ", fullPairName='" + fullPairName + '\'' +
                ", shortPairName='" + shortPairName + '\'' +
                ", orders=" + orders +
                '}';
    }
}
