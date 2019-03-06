package org.poem.user;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.Result;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.UserInfoVO;
import org.poem.common.IDService;
import org.poem.constant.ErrorCode;
import org.poem.jooq.tables.TUser;
import org.poem.jooq.tables.records.TUserRecord;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.sme.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;

/**
 * 用户
 *
 * @author poem
 */
@Service
public class TUserService implements UserInfoService{

    @Autowired
    private UserDao userDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private MessageService messageService;

    /**
     * 添加用户
     *
     * @param tUserVO 用户
     * @param user    当前用户
     * @return
     */
    public ResultVO<String> AddUser(TUserVO tUserVO, Long user) {
        if (StringUtils.isEmpty(tUserVO.getLoginName())) {
            return new ResultVO<>(2,null,"login 不能为空。");
        }
        if (StringUtils.isEmpty(tUserVO.getName())) {
            return new ResultVO<>(2,null,"name 不能为空");
        }
        if (StringUtils.isEmpty(tUserVO.getPassword())) {
            return new ResultVO<>(2,null,"password不能为空");
        }
        if (StringUtils.isEmpty(tUserVO.getPhone())) {
            return new ResultVO<>(2,null,"phone不能为空");
        }
        Result<TUserRecord> tUserRecords = userDao.findByName(tUserVO.getLoginName());
        if (tUserRecords.size()!=0) {
            return new ResultVO<>(2,null,"登陆名已存在");
        }
        TUserRecord tUser = new TUserRecord();
        tUser.setId(idService.getId());
        tUser.setPassword(tUserVO.getPassword());
        tUser.setDepartId(null);
        tUser.setName(tUserVO.getName());
        tUser.setLoginName(tUserVO.getLoginName());
        tUser.setRemark(tUserVO.getRemark());
        tUser.setPhone(tUserVO.getPhone());
        tUser.setCreateTime(new Timestamp(System.currentTimeMillis()));
        tUser.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tUser.setCreateUser(user);
        tUser.setUpdateUser(user);
        tUser.setFlag(true);
        tUser.setStatus(1);
        this.userDao.insert(tUser);
        return new ResultVO<>("添加成功");
    }


    /**
     * 修改状态
     *
     * @param userId        用户
     * @param currentUserId 当前登陆人
     * @param status        状态 0 不可用 1 可用
     * @return
     */
    public ResultVO<String> disableUser(Long userId, Long currentUserId, Integer status) {
        TUserRecord tUserRecord = this.userDao.findById(userId);
        if (tUserRecord == null) {
            return new ResultVO<>(2,null,"查无此人。");
        }
        tUserRecord.setStatus(status);
        tUserRecord.setUpdateUser(currentUserId);
        tUserRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        this.userDao.update(tUserRecord);
        return new ResultVO<>("修改成功。");
    }

    /**
     * 修改状态
     *
     * @param tUserVO 当前用户
     * @param userId  用户id
     * @return
     */
    public ResultVO<String> updateUser(TUserVO tUserVO, Long userId) {
        if (StringUtils.isEmpty(tUserVO.getLoginName())) {
            return new ResultVO<>(2,null,"login 不能为空。");
        }
        if (StringUtils.isEmpty(tUserVO.getName())) {
            return new ResultVO<>(2,null,"name 不能为空");
        }
//        if (StringUtils.isEmpty(tUserVO.getPassword())) {
//            return new ResultVO<>(2,null,"password不能为空");
//        }
        if (StringUtils.isEmpty(tUserVO.getPhone())) {
            return new ResultVO<>(2,null,"phone不能为空");
        }
        TUserRecord tUser = this.userDao.findById(Long.valueOf(tUserVO.getId()));
        if (tUser == null) {
            return new ResultVO<>(2,null,"查无此人。");
        }
        // tUser.setDepartId(Long.valueOf(tUserVO.getDepartId()));
        tUser.setName(tUserVO.getName());
        tUser.setPhone(tUserVO.getPhone());
        tUser.setLoginName(tUserVO.getLoginName());
        // tUser.setRemark(tUserVO.getRemark());
        tUser.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tUser.setUpdateUser(userId);
        tUser.setFlag(true);
        tUser.setStatus(1);
        this.userDao.update(tUser);
        return new ResultVO<>("跟新完成");
    }


    /**
     * 修改密码
     *
     * @param password 密码
     * @param userId   用户id
     * @return
     */
    public ResultVO<String> updatePassword(String password, String userId) {
        if (StringUtils.isEmpty(password)) {
            return new ResultVO<>(2,null,"password不能为空");
        }
        TUserRecord tUser = this.userDao.findById(Long.valueOf(userId));
        if (tUser == null) {
            return new ResultVO<>(2,null,"查无此人。");
        }
        tUser.setPassword(password);
        this.userDao.update(tUser);
        return new ResultVO<>("修改成功");
    }


    /**
     * @param queryVO
     * @param pageSize
     * @param pageNumber
     * @return
     */
    public ResultVO<PageVO<TUserVO>> getAllUser(UserQueryVO queryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(queryVO.getName())) {
            conditions.add(TUser.T_USER.NAME.like("%" + queryVO.getName() + "%"));
        }
        if (queryVO.getRoleId() != null) {
            conditions.add(TUser.T_USER.ROLE_ID.eq(queryVO.getRoleId()));
        }
        if (queryVO.getStatus() != null) {
            conditions.add(TUser.T_USER.STATUS.eq(queryVO.getStatus()));
        }
        PageVO<TUserRecord> records =
                this.userDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), Arrays.asList(TUser.T_USER.CREATE_TIME.desc()));
        PageVO<TUserVO> pageVO = new PageVO<>();
        pageVO.setTotalCount(records.getTotalCount());
        List<TUserVO> tUserVOS = Lists.newArrayList();
        for (TUserRecord pageDatum : records.getPageData()) {
            TUserVO tUserVO = new TUserVO();
            tUserVO.setId(String.valueOf(pageDatum.getId()));
            tUserVO.setDepartId(String.valueOf(pageDatum.getDepartId()));
            tUserVO.setName(pageDatum.getName());
            tUserVO.setLoginName(pageDatum.getLoginName());
            tUserVO.setRemark(pageDatum.getRemark());
            tUserVO.setPhone(pageDatum.getPhone());
            tUserVO.setCreateTime(DateUtils.format(pageDatum.getCreateTime()));
            tUserVO.setUpdateTime(DateUtils.format(pageDatum.getUpdateTime()));
            tUserVO.setStatus(String.valueOf(pageDatum.getStatus()));
            TUserRecord updateUser = this.userDao.findById(pageDatum.getUpdateUser());
            tUserVO.setUpdateUser(updateUser == null ? "" : updateUser.getName());
            tUserVOS.add(tUserVO);

        }
        pageVO.setPageData(tUserVOS);
        return new ResultVO<>(1, pageVO);
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public ResultVO<TUserVO> getById(Long id) {
        TUserRecord pageDatum = this.userDao.findById(id);
        if (pageDatum == null) {
            return new ResultVO<>(0, null, "查无此人。");
        }
        TUserVO tUserVO = new TUserVO();
        tUserVO.setId(String.valueOf(pageDatum.getId()));
        tUserVO.setDepartId(String.valueOf(pageDatum.getDepartId()));
        tUserVO.setName(pageDatum.getName());
        tUserVO.setLoginName(pageDatum.getLoginName());
        tUserVO.setRemark(pageDatum.getRemark());
        tUserVO.setPhone(pageDatum.getPhone());
        tUserVO.setCreateTime(DateUtils.format(pageDatum.getCreateTime()));
        tUserVO.setUpdateTime(DateUtils.format(pageDatum.getUpdateTime()));
        tUserVO.setStatus(String.valueOf(pageDatum.getStatus()));
        TUserRecord updateUser = this.userDao.findById(pageDatum.getUpdateUser());
        tUserVO.setUpdateUser(updateUser == null ? "" : updateUser.getName());
        return new ResultVO<>(tUserVO);
    }

    /**
     * 登陆
     * @param userName
     * @param password
     * @param ip
     * @return
     */
    @Override
    public ResultVO<UserInfoVO> login(String userName, String password, String ip) {

        Result<TUserRecord> users = userDao.findUser(userName);
        if(users.size() == 0){
            return new ResultVO<>(ErrorCode.ParamError.getErrorCode(),null,"用户或者密码不对");
        }
        TUserRecord tUserRecord = users.get(0);
        //判断用户是否禁用
        if(!tUserRecord.getFlag()){
            return new ResultVO<>(ErrorCode.ParamError.getErrorCode(),null,"用户已被禁用，不能登录");
        }
        if (!password.equals(tUserRecord.getPassword())){
            return new ResultVO<>(ErrorCode.ParamError.getErrorCode(),null,"用户或者密码不对");
        }
        UserInfoVO userInfoVO = new UserInfoVO();
        userInfoVO.setId(tUserRecord.getId());
        userInfoVO.setLocked(tUserRecord.getFlag());
        userInfoVO.setUserName(tUserRecord.getName());
        return new ResultVO<>(userInfoVO);
    }

    /**
     * 忘记密码
     * @param account
     * @param name
     * @param phone
     * @param code
     * @return
     */
    public ResultVO<String>  forgetPassword(String account, String name, String phone, String code){
        TUserRecord tUserRecord = this.userDao.findByUserAccount(account);
        if (tUserRecord == null){
            return new ResultVO<>(-1,"登陆账户不存在");
        }

        if (!name.equals(tUserRecord.getName())){
            return new ResultVO<>(-1,"用户名和账户不匹配。");
        }
        if (!phone.equals(tUserRecord.getPhone())){
            return new ResultVO<>(-1,"用户名和电话号码。");
        }
        ResultVO<String> codeR = this.messageService.validate(phone,code);
        if (codeR.getErrorCode() != 0){
            return codeR;
        }
        return new ResultVO<>(0,tUserRecord.getPassword(),"找回密码");
    }

    /**
     * 禁用
     * @param id
     * @return
     */
    public ResultVO<String> disable(Long id, Long userId) {
        TUserRecord tUserRecord = this.userDao.findById(id);
        tUserRecord.setFlag(false);
        tUserRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tUserRecord.setUpdateUser(userId);
        this.userDao.update(tUserRecord);
        return new ResultVO<>(0,null,"成功");
    }

    /**
     *
     * @param id
     * @param userId
     * @return
     */
    public ResultVO<String> able(Long id,Long userId) {
        TUserRecord tUserRecord = this.userDao.findById(id);
        tUserRecord.setFlag(true);
        tUserRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tUserRecord.setUpdateUser(userId);
        this.userDao.update(tUserRecord);
        return new ResultVO<>(0,null,"成功");
    }
}
