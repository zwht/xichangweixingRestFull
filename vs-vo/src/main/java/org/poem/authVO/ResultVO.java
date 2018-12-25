package org.poem.authVO;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 返回实体
 *
 * @param <T>
 */
@Api(value = "返回消息")
public class ResultVO<T> {

    @ApiModelProperty(value = "状态码")
    private Integer errorCode = 0;

    @ApiModelProperty(value = "数据")
    private T data = null;

    @ApiModelProperty(value = "消息")
    private String msg;

    public ResultVO() {
    }

    public ResultVO(Integer errorCode) {
        this.errorCode = errorCode;
    }

    public ResultVO(Integer errorCode, T t) {
        this.errorCode = errorCode;
        this.data = t;
        this.msg = "";
    }

    public ResultVO(T t) {
        this.errorCode = 0;
        this.data = t;
        this.msg = "";
    }

    public ResultVO(Integer errorCode, T t, String msg) {
        this.errorCode = errorCode;
        this.data = t;
        this.msg = msg;
    }

    public Integer getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
