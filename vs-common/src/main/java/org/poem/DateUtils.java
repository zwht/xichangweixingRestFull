package org.poem;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.LoggerFactory;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * 日期处理
 */
public class DateUtils {

    private static final org.slf4j.Logger logger = LoggerFactory.getLogger(DateUtils.class);
    /**
     * 时间格式(yyyy-MM-dd)
     */
    public final static String DATE_PATTERN = "yyyy-MM-dd";
    /**
     * 时间格式(yyyy-MM-dd HH:mm:ss)
     */
    public final static String DATE_TIME_PATTERN = "yyyy-MM-dd HH:mm:ss";

    public static String format(Date date) {
        return format(date, DATE_PATTERN);
    }

    public static String format(Date date, String pattern) {
        if (date != null) {
            SimpleDateFormat df = new SimpleDateFormat(pattern);
            return df.format(date);
        }
        return null;
    }

    public static Timestamp formatTimestamp(String datetime) {
        if (StringUtils.isEmpty(datetime)) {
            return null;
        }
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = null;
        try {
            date = dateFormat.parse(datetime);
        } catch (ParseException e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return date == null ? null : new Timestamp(date.getTime());
    }


    public static Timestamp formatTimestampDateTime(String datetime) {
        if (StringUtils.isEmpty(datetime)) {
            return null;
        }
        SimpleDateFormat dateFormat = new SimpleDateFormat(DATE_TIME_PATTERN);
        Date date = null;
        try {
            date = dateFormat.parse(datetime);
        } catch (ParseException e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return date == null ? null : new Timestamp(date.getTime());
    }

    public static Timestamp formatTimestampM(String datetime) {
        if (StringUtils.isEmpty(datetime)) {
            return null;
        }
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm");
        Date date = null;
        try {
            date = dateFormat.parse(datetime);
        } catch (ParseException e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return date == null ? null : new Timestamp(date.getTime());
    }

    /**
     * Timestamp 转 Date
     *
     * @param timestamp
     * @return
     */
    public static Date timestampToDate(Timestamp timestamp) {
        return new Date(timestamp.getTime());
    }

    /**
     * @param flowerTime
     * @return
     */
    public static String flowerTimeStatisticsInCondition(Timestamp flowerTime) {
        Date date = DateUtils.timestampToDate(flowerTime);
        if (flowerTime != null) {
            StringBuffer buffer = new StringBuffer();
            //-150天
            buffer.append(getAddSingleQuotes(getWantDayByCurrentTime(date, -150)));
            //-120天
            buffer.append(",").append(getAddSingleQuotes(getWantDayByCurrentTime(date, -120)));
            //-90天
            buffer.append(",").append(getAddSingleQuotes(getWantDayByCurrentTime(date, -90)));
            //-60天
            buffer.append(",").append(getAddSingleQuotes(getWantDayByCurrentTime(date, -60)));
            //-30天
            buffer.append(",").append(getAddSingleQuotes(getWantDayByCurrentTime(date, -30)));
            //0天
            buffer.append(",").append(getAddSingleQuotes(getWantDayByCurrentTime(date, 0)));
            //30天
            buffer.append(",").append(getAddSingleQuotes(getWantDayByCurrentTime(date, 30)));
            //60天
            buffer.append(",").append(getAddSingleQuotes(getWantDayByCurrentTime(date, 60)));
            //90天
            buffer.append(",").append(getAddSingleQuotes(getWantDayByCurrentTime(date, 90)));
            //120天
            buffer.append(",").append(getAddSingleQuotes(getWantDayByCurrentTime(date, 120)));
            //150天
            buffer.append(",").append(getAddSingleQuotes(getWantDayByCurrentTime(date, 150)));
            return buffer.toString();
        }
        return null;
    }


    /**
     * 获取当前日期的前后wantDay天
     *
     * @param currentDate
     * @param wantDay
     * @return
     */
    public static String getWantDayByCurrentTime(Date currentDate, int wantDay) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        //wantDay天
        Calendar theCa = Calendar.getInstance();
        theCa.setTime(currentDate);
        theCa.add(Calendar.DATE, wantDay);
        Date start = theCa.getTime();
        return sdf.format(start);
    }

    /**
     * 为字符增加单引号用于构建查询条件
     *
     * @param start
     */
    private static String getAddSingleQuotes(String start) {
        return new StringBuffer().append("'").append(start).append("'").toString();
    }

    public static String isValidDate(String str, String patten) {
        boolean convertSuccess = true;
        // 指定日期格式为四位年/两位月份/两位日期，注意yyyy/MM/dd区分大小写；
        SimpleDateFormat format = new SimpleDateFormat(patten);
        try {
            // 设置lenient为false. 否则SimpleDateFormat会比较宽松地验证日期，比如2007/02/29会被接受，并转换成2007/03/01
            format.setLenient(false);
            format.parse(str);
            switch (patten) {
                case "yyyy":
                    str = str.substring(0, 4);
                    return str + "-01-01 00:00:00";
                case "yyyy-MM":
                    return str + "-01 00:00:00";
                case "yyyy-MM-dd":
                    return str + " 00:00:00";
                default:
                    return str;
            }
        } catch (ParseException e) {
            // e.printStackTrace();
            // 如果throw java.text.ParseException或者NullPointerException，就说明格式不对
//            convertSuccess=false;
        }
//        return convertSuccess;
        return null;
    }
}
