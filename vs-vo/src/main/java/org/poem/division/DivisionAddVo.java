package org.poem.division;

/**
 *  @author         jamie  
 *  @version        V1.0   
 *  @date           2018/6/19 10:37  
 */
public class DivisionAddVo {

    /**
     * 行政区划名称
     */
    private String name;
    private Long parentId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }
}
