package org.poem.constant;

/**
 * @author poem
 */

public enum RecordStatus {

    /**
     *
     */
    Effective(1),
    /**
     *
     */
    Deleted(0);

    private Integer status;

    RecordStatus(Integer status) {
        this.status = status;
    }

    public Integer getStatus() {
        return status;
    }
}
