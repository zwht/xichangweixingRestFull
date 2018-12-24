package org.poem;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;

import java.lang.reflect.Method;
import java.util.HashSet;
import java.util.Set;

/**
 * Vo和Record互转工具类
 *
 * @author poem
 */
public class VoReTraversalUtil {

    private static Logger logger = LoggerFactory.getLogger(VoReTraversalUtil.class);

    /**
     * vo和record互转
     *
     * @param src
     * @param toClass
     * @param <T>
     * @return
     */
    public static <T, Z> T traversal(Z src, Class<T> toClass) {

        Class fromClass;
        T interfaces = null;
        try {
            interfaces = toClass.newInstance();
            fromClass = Class.forName(src.getClass().getName());
            //获取所有的方法
            Method[] m = fromClass.getDeclaredMethods();

            //获取方法名
            for (int i = 0; i < m.length; i++) {
                String method = m[i].getName();
                //获取get开始的方法名
                if (method.startsWith("get") && !method.contains("getClass")) {
                    //获取对应对应get方法的value值
                    Object value = m[i].invoke(src);
                    if (value != null) {
                        //截取get方法除get意外的字符 如getUserName-->UserName
                        try {
                            String key = method.substring(3);
                            String typeNamea = fromClass.getMethod(method).getGenericReturnType().getTypeName();
                            String typeNameb = toClass.getMethod(method).getGenericReturnType().getTypeName();
                            if (!typeNamea.equals(typeNameb)) {
                                logger.error(key + "类型不匹配");
                                continue;
                            }

                            String methodName = "set" + key;
                            Method method1 = toClass.getMethod(methodName, value.getClass());
                            method1.invoke(interfaces, value);
                        } catch (Exception e) {
                            continue;
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return interfaces;
    }

    private static <T> String[] getNullPropertyNames(T source) {
        final BeanWrapper src = new BeanWrapperImpl(source);
        java.beans.PropertyDescriptor[] pds = src.getPropertyDescriptors();

        Set<String> emptyNames = new HashSet<>();
        Object srcValue = null;
        for (java.beans.PropertyDescriptor pd : pds) {
            srcValue = src.getPropertyValue(pd.getName());
            if (srcValue == null) {
                emptyNames.add(pd.getName());
            }
        }
        String[] result = new String[emptyNames.size()];
        return emptyNames.toArray(result);
    }

    /**
     * @param src
     * @param toClass
     * @param <T>
     * @return
     */
    public static <T, Z> T copyPropertiesIgnoreNull(Z src, Class<T> toClass) {
        T t = null;
        try {
            t = toClass.newInstance();
            BeanUtils.copyProperties(src, t, getNullPropertyNames(src));
            return t;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return t;
    }

    /**
     * vo和record互转,忽略类型不匹配，直接跳到下一个
     *
     * @param src
     * @param toClass
     * @return
     * @throws Exception
     */
    public static Object traversalTwo(Object src, Class<?> toClass) {

        Class fromClass;
        Object interfaces = null;
        try {
            interfaces = toClass.newInstance();
            fromClass = Class.forName(src.getClass().getName());
            //获取所有的方法
            Method[] m = fromClass.getDeclaredMethods();


            //获取方法名
            for (int i = 0; i < m.length; i++) {
                String method = m[i].getName();
                //获取get开始的方法名
                if (method.startsWith("get") && !method.contains("getClass")) {
                    //获取对应对应get方法的value值
                    Object value = m[i].invoke(src);
                    if (value != null) {
                        //截取get方法除get意外的字符 如getUserName-->UserName
                        String key = method.substring(3);
                        String typeNamea = fromClass.getMethod(method).getGenericReturnType().getTypeName();
                        try {
                            String typeNameb = toClass.getMethod(method).getGenericReturnType().getTypeName();
                            if (!typeNamea.equals(typeNameb)) {
                                System.out.println("traversalTwo转换出现了类型不匹配！请检查*****：" + typeNameb);
                                continue;
                            }
                            String methodName = "set" + key;
                            Method method1 = toClass.getMethod(methodName, value.getClass());
                            method1.invoke(interfaces, value);
                        } catch (NoSuchMethodException e) {
                            continue;
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return interfaces;
    }
}