package org.poem.csv.util;


import com.opencsv.CSVReader;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.HeaderColumnNameTranslateMappingStrategy;

import java.io.*;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Administrator
 * @date 2017/10/9

 */

public class ImportCSV{
    /**
     * Parses a csv file into a list of beans.
     *
     * @param <T> the type of the bean
     * @param filename the name of the csv file to parse
     * @param fieldDelimiter the field delimiter
     * @param beanClass the bean class to map csv records to
     * @param columnMapping the bean class method to map csv records to
     * @return the list of beans or an empty list there are none
     * @throws FileNotFoundException if the file does not exist
     */
    public static <T> List<T> parseCsvFileToBeans(final String filename,
                                                  final char fieldDelimiter,
                                                  final Class<T> beanClass,
                                                  final Map<String, String> columnMapping) throws FileNotFoundException, UnsupportedEncodingException {
        CSVReader reader = null;
        try {
            FileInputStream fis = new FileInputStream(filename);
            reader = new CSVReader(new BufferedReader(new InputStreamReader(fis,"gbk")),
                    fieldDelimiter);
            final HeaderColumnNameTranslateMappingStrategy<T> strategy =
                    new HeaderColumnNameTranslateMappingStrategy<T>();
            strategy.setType(beanClass);
            strategy.setColumnMapping(columnMapping);

            final CsvToBean<T> csv = new CsvToBean<T>();
            return csv.parse(strategy, reader);
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (final IOException e) {
                    // ignore
                }
            }
        }
    }

}

