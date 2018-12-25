package org.poem.excel.utils;


import org.jooq.tools.StringUtils;
import org.poem.excel.exceptions.TimeMatchFormatException;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

/**
 * 时间处理工具类
 */
public class DateUtils {

    static public final String DATE_FORMAT_DAY = "yyyy-MM-dd";
    static public final String DATE_FORMAT_DAY_2 = "yyyy/MM/dd";
    static public final String TIME_FORMAT_SEC = "HH:mm:ss";
    static public final String DATE_FORMAT_SEC = "yyyy-MM-dd HH:mm:ss";
    static public final String DATE_FORMAT_MSEC = "yyyy-MM-dd HH:mm:ss.SSS";
    static public final String DATE_FORMAT_MSEC_T = "yyyy-MM-dd'T'HH:mm:ss.SSS";
    static public final String DATE_FORMAT_MSEC_T_Z = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
    static public final String DATE_FORMAT_DAY_SIMPLE = "y/M/d";

    /**
     * 匹配yyyy-MM-dd
     */
    private static final String DATE_REG = "^[1-9]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$";
    /**
     * 匹配yyyy/MM/dd
     */
    private static final String DATE_REG_2 = "^[1-9]\\d{3}/(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])$";
    /**
     * 匹配y/M/d
     */
    private static final String DATE_REG_SIMPLE_2 = "^[1-9]\\d{3}/([1-9]|1[0-2])/([1-9]|[1-2][0-9]|3[0-1])$";
    /**
     * 匹配HH:mm:ss
     */
    private static final String TIME_SEC_REG = "^(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d$";
    /**
     * 匹配yyyy-MM-dd HH:mm:ss
     */
    private static final String DATE_TIME_REG = "^[1-9]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\\s" +
            "(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d$";
    /**
     * 匹配yyyy-MM-dd HH:mm:ss.SSS
     */
    private static final String DATE_TIME_MSEC_REG = "^[1-9]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\\s" +
            "(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d\\.\\d{3}$";
    /**
     * 匹配yyyy-MM-dd'T'HH:mm:ss.SSS
     */
    private static final String DATE_TIME_MSEC_T_REG = "^[1-9]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T" +
            "(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d\\.\\d{3}$";
    /**
     * 匹配yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
     */
    private static final String DATE_TIME_MSEC_T_Z_REG = "^[1-9]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T" +
            "(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d\\.\\d{3}Z$";

    /**
     * <p>将{@link Date}类型转换为指定格式的字符串</p></br>
     *
     * @param date   {@link Date}类型的时间
     * @param format 指定格式化类型
     * @return 返回格式化后的时间字符串
     */

    public static String date2Str(Date date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }

    /**
     * <p>将{@link Date}类型转换为默认为[yyyy-MM-dd HH:mm:ss]类型的字符串</p></br>
     *
     * @param date {@link Date}类型的时间
     * @return 返回格式化后的时间字符串
     */
    public static String date2Str(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT_SEC);
        return sdf.format(date);
    }

    /**
     * <p>根据给出的格式化类型将时间字符串转为{@link Date}类型</p></br>
     *
     * @param strDate 时间字符串
     * @param format  格式化类型
     * @return 返回{@link java.util.Date}类型
     */
    public static Date str2Date(String strDate, String format) {
        Date date = null;
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        try {
            date = sdf.parse(strDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    /**
     * <p>字符串时间转为{@link Date}类型，
     * 未找到匹配类型则抛出{@link TimeMatchFormatException}异常</p>
     * <p>支持匹配类型列表：</p>
     * <p>yyyy-MM-dd</p>
     * <p>yyyy/MM/dd</p>
     * <p>HH:mm:ss</p>
     * <p>yyyy-MM-dd HH:mm:ss</p>
     * <p>yyyy-MM-dd'T'HH:mm:ss.SSS</p>
     * <p>yyyy-MM-dd'T'HH:mm:ss.SSS'Z'</p>
     * </br>
     *
     * @param strDate 时间字符串
     * @return Date  {@link Date}时间
     * @throws TimeMatchFormatException
     */
    public static Date str2Date(String strDate) throws TimeMatchFormatException,
            ParseException {

        strDate = strDate.trim();
        SimpleDateFormat sdf = null;
        if (RegularUtils.isMatched(strDate, DATE_REG)) {
            sdf = new SimpleDateFormat(DATE_FORMAT_DAY);
        }
        if (RegularUtils.isMatched(strDate, DATE_REG_2)) {
            sdf = new SimpleDateFormat(DATE_FORMAT_DAY_2);
        }
        if (RegularUtils.isMatched(strDate, DATE_REG_SIMPLE_2)) {
            sdf = new SimpleDateFormat(DATE_FORMAT_DAY_SIMPLE);
        }
        if (RegularUtils.isMatched(strDate, TIME_SEC_REG)) {
            sdf = new SimpleDateFormat(TIME_FORMAT_SEC);
        }
        if (RegularUtils.isMatched(strDate, DATE_TIME_REG)) {
            sdf = new SimpleDateFormat(DATE_FORMAT_SEC);
        }
        if (RegularUtils.isMatched(strDate, DATE_TIME_MSEC_REG)) {
            sdf = new SimpleDateFormat(DATE_FORMAT_MSEC);
        }
        if (RegularUtils.isMatched(strDate, DATE_TIME_MSEC_T_REG)) {
            sdf = new SimpleDateFormat(DATE_FORMAT_MSEC_T);
        }
        if (RegularUtils.isMatched(strDate, DATE_TIME_MSEC_T_Z_REG)) {
            sdf = new SimpleDateFormat(DATE_FORMAT_MSEC_T_Z);
        }
        if (null != sdf) {
            return sdf.parse(strDate);
        }
        throw new TimeMatchFormatException(
                String.format("[%s] can not matching right time format", strDate));
    }

    /**
     * <p>字符串时间转为{@link Date}类型，未找到匹配类型则返NULL</p>
     * <p>支持匹配类型列表：</p>
     * <p>yyyy-MM-dd</p>
     * <p>yyyy/MM/dd</p>
     * <p>HH:mm:ss</p>
     * <p>yyyy-MM-dd HH:mm:ss</p>
     * <p>yyyy-MM-dTHH:mm:ss.SSS</p>
     * </br>
     *
     * @param strDate 时间字符串
     * @return Date  {@link Date}时间
     */
    public static Date str2DateUnmatch2Null(String strDate) {
        Date date = null;
        try {
            date = str2Date(strDate);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return date;
    }

    public static Timestamp parse(String date) {
        if (StringUtils.isEmpty(date)) {
            return null;
        }
        try {
            Date applyMaxDate = org.apache.commons.lang3.time.DateUtils.parseDate(date, "yyyyMMdd");
            return new Timestamp(applyMaxDate.getTime());
        } catch (ParseException e) {
            return null;
        }
    }

    public static  Timestamp getLastTimeOfDate(Timestamp date){
        if(date == null){
            return null;
        }
        LocalDateTime dateTime=date.toLocalDateTime();
        LocalDateTime lastDateTime=LocalDateTime.of(dateTime.getYear(),dateTime.getMonthValue(),dateTime.getDayOfMonth(),23,59,59,999999999);
        return new Timestamp(lastDateTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli());
    }

}
