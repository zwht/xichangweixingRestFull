package org.poem.supplier.vo;


import java.util.Map;

public class TSupplierDataContainerVO {

    /**
     * 供应商类型
     */
    private Map<String, Long> typeMap;


    /**
     * 区域
     */
    private Map<String, Long> region;

    public Map<String, Long> getTypeMap() {
        return typeMap;
    }

    public void setTypeMap(Map<String, Long> typeMap) {
        this.typeMap = typeMap;
    }

    public Map<String, Long> getRegion() {
        return region;
    }

    public void setRegion(Map<String, Long> region) {
        this.region = region;
    }
}
