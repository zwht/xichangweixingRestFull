package org.poem.division;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 *  @author         ozc  
 *  @version        V1.0   
 *  @date           2018/7/19 10:37  
 */
public class AdminDivisionListVo {
    @JsonFormat(shape=JsonFormat.Shape.STRING)
    private Long id;
    @JsonFormat(shape=JsonFormat.Shape.STRING)
    private Long provinceCode;
    private String provinceName;
    @JsonFormat(shape=JsonFormat.Shape.STRING)
    private Long cityCode;
    private String cityName;
    @JsonFormat(shape=JsonFormat.Shape.STRING)
    private Long countyCode;
    private String countyName;
    @JsonFormat(shape=JsonFormat.Shape.STRING)
    private Long townCode;
    private String townName;
    @JsonFormat(shape=JsonFormat.Shape.STRING)
    private Long villageCode;
    private String villageName;
    private Integer level;
    private Integer cityTownClassifyCode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProvinceCode() {
        return provinceCode;
    }

    public void setProvinceCode(Long provinceCode) {
        this.provinceCode = provinceCode;
    }

    public String getProvinceName() {
        return provinceName;
    }

    public void setProvinceName(String provinceName) {
        this.provinceName = provinceName;
    }

    public Long getCityCode() {
        return cityCode;
    }

    public void setCityCode(Long cityCode) {
        this.cityCode = cityCode;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public Long getCountyCode() {
        return countyCode;
    }

    public void setCountyCode(Long countyCode) {
        this.countyCode = countyCode;
    }

    public String getCountyName() {
        return countyName;
    }

    public void setCountyName(String countyName) {
        this.countyName = countyName;
    }

    public Long getTownCode() {
        return townCode;
    }

    public void setTownCode(Long townCode) {
        this.townCode = townCode;
    }

    public String getTownName() {
        return townName;
    }

    public void setTownName(String townName) {
        this.townName = townName;
    }

    public Long getVillageCode() {
        return villageCode;
    }

    public void setVillageCode(Long villageCode) {
        this.villageCode = villageCode;
    }

    public String getVillageName() {
        return villageName;
    }

    public void setVillageName(String villageName) {
        this.villageName = villageName;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getCityTownClassifyCode() {
        return cityTownClassifyCode;
    }

    public void setCityTownClassifyCode(Integer cityTownClassifyCode) {
        this.cityTownClassifyCode = cityTownClassifyCode;
    }
}
