package org.poem.authVO;


/**
 * @author poem
 */
public class OffsetPagingVO {
    private Integer page;
    private Integer size;
    private Integer offset;

    public Integer getOffset() {
        return (page-1) * size;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public OffsetPagingVO(Integer page, Integer size) {
        this.page = page;
        this.size = size;

    }

    public void setOffset(Integer offset) {
        this.offset = offset;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }
}
