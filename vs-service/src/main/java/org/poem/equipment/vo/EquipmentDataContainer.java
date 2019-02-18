package org.poem.equipment.vo;

import java.util.Map;

public class EquipmentDataContainer {

    /**
     * 设备类别
     */
    private Map<String, Long> equipTypeMap;

    /**
     * 供应商
     */
    private Map<String,Long> SupplierMap;

    public Map<String, Long> getEquipTypeMap() {
        return equipTypeMap;
    }

    public void setEquipTypeMap(Map<String, Long> equipTypeMap) {
        this.equipTypeMap = equipTypeMap;
    }

    public Map<String, Long> getSupplierMap() {
        return SupplierMap;
    }

    public void setSupplierMap(Map<String, Long> supplierMap) {
        SupplierMap = supplierMap;
    }
}
