package org.poem.authVO;


import org.poem.user.UserDetailVO;

/**
 * @author poem
 */
public class UserInfoVO implements UserDetailVO {

    private Long id;

    private Boolean locked;

    private String password;

    private String userName;

    public void setId(Long id) {
        this.id = id;
    }

    public void setLocked(Boolean locked) {
        this.locked = locked;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * 获取id
     * @return
     */
    public Long getId(){
        return this.id;
    }

    @Override
    public Boolean getLocked() {
        return this.locked;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUserName() {
        return this.userName;
    }
}
