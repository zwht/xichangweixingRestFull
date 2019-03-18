package org.poem.user;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * @author poem
 */
@Api(value = "查询实体")
public class UserQueryVO {

    @ApiModelProperty("名字")
    public String name;

    @ApiModelProperty("电话")
    public String phone;

    @ApiModelProperty(value = "角色")
    private Long roleId;

    @ApiModelProperty(value = "状态")
    private Integer status;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
