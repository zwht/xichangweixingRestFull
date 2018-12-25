package org.poem.user;


import org.poem.authVO.ResultVO;
import org.poem.authVO.UserInfoVO;

/**
 * @author poem
 */
public interface UserInfoService {

    /**
     * 登陆
     * @param userName
     * @param password
     * @param ip
     * @return
     */
    ResultVO<UserInfoVO> login(String userName, String password, String ip);

}
