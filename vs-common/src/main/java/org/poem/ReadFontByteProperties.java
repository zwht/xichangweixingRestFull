package org.poem;

import java.io.InputStream;
import java.util.Properties;

/**
 * @author poem
 */
public class ReadFontByteProperties {
    static private String fontByteStr = null;

    static {
        loads();
    }

    synchronized static public void loads() {
        if (fontByteStr == null) {
            InputStream is = ReadFontByteProperties.class.getResourceAsStream("/fontByte.properties");
            Properties dbproperties = new Properties();
            try {
                dbproperties.load(is);
                fontByteStr = dbproperties.getProperty("fontByteStr");
            } catch (Exception e) {
                //System.err.println("不能读取属性文件. " + "请确保fontByte.properties在CLASSPATH指定的路径中");
            }
        }
    }

    public static String getFontByteStr() {
        if (fontByteStr == null) {
            loads();
        }
        return fontByteStr;
    }
}
