package org.poem.authVO;


import java.util.ArrayList;
import java.util.List;


/**
 * @author poem
 */
public class PageVO<T> {


    private Integer totalCount = 0;

    private List<T> pageData = new ArrayList<>();

    public PageVO() {
    }

    public PageVO(Integer totalCount) {
        this.totalCount = totalCount;
    }

    public PageVO(Integer totalCount, List<T> pageData) {
        this.totalCount = totalCount;
        this.pageData = pageData;
    }

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }

    public List<T> getPageData() {
        return pageData;
    }

    public void setPageData(List<T> pageData) {
        this.pageData = pageData;
    }
}