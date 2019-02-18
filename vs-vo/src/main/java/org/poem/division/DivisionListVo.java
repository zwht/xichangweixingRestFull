package org.poem.division;

/**
 *  @author         jamie  
 *  @version        V1.0   
 *  @date           2018/6/19 10:37  
 */
public class DivisionListVo {
    /**
     * 行政区划id
     */
    private Long id;
    /**
     * 行政区划代码
     */
    private Long code;
    /**
     * 行政区划名称
     */
    private String name;
    /**
     * 完整名称
     */
    private String fullName;
    /**
     * 父级id
     */
    private Long parentId;
    /**
     * 层级
     */
    private Short level;
    /**
     * 区县id
     */
    private Long districtId;
    /**
     * 乡镇ID
     */
    private Long townId;

    /**
     * 图表地址
     */
    private String iconUrl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCode() {
        return code;
    }

    public void setCode(Long code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public Short getLevel() {
        return level;
    }

    public void setLevel(Short level) {
        this.level = level;
    }

    public Long getDistrictId() {
        return districtId;
    }

    public void setDistrictId(Long districtId) {
        this.districtId = districtId;
    }

    public Long getTownId() {
        return townId;
    }

    public void setTownId(Long townId) {
        this.townId = townId;
    }

    public String getIconUrl() {
        return iconUrl;
    }

    public void setIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
    }
}
