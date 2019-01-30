package org.poem.excel.annotation;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * 功能说明: 用来在对象的属性上加入的annotation，通过该annotation说明某个属性所对应的标题<br/>
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface ColumnField {

    /**
     * 列的中文名
     * @return
     */
    String value();

    /**
     * 是否是日期
     * xxxx-xx-xx
     * @return
     */
    boolean isDate() default false;


    /**
     * 是否是身份证
     * @return
     */
    boolean isIdNum() default false;


    /**
     * 是否是数字
     * @return
     */
    boolean isNumber() default false;


}
