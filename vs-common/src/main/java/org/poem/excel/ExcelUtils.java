package org.poem.excel;

import com.google.protobuf.ByteString;
import org.apache.commons.beanutils.BeanUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddressList;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFDataValidation;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.poem.StringUtils;
import org.poem.excel.handler.ExcelHeader;
import org.poem.excel.utils.Utils;

import java.io.*;
import java.lang.reflect.Array;
import java.util.*;

/**
 * Created by LQL on 2017/9/27.
 */

public class ExcelUtils {

    static private ExcelUtils excelUtils = new ExcelUtils();

    private ExcelUtils() {
    }

    public static ExcelUtils getInstance() {
        return excelUtils;
    }

    /*----------------------------------------读取Excel操作基于注解映射---------------------------------------------*/
    /*  一. 操作流程 ：                                                                                            */
    /*      1) 读取表头信息,与给出的Class类注解匹配                                                                  */
    /*      2) 读取表头下面的数据内容, 按行读取, 并映射至java对象                                                      */
    /*  二. 参数说明                                                                                               */
    /*      *) excelPath        =>      目标Excel路径                                                              */
    /*      *) InputStream      =>      目标Excel文件流                                                            */
    /*      *) clazz            =>      java映射对象                                                               */
    /*      *) offsetLine       =>      开始读取行坐标(默认0)                                                       */
    /*      *) limitLine        =>      最大读取行数(默认表尾)                                                      */
    /*      *) sheetIndex       =>      Sheet索引(默认0)                                                           */

    public <T> List<T> readExcel2Objects(String excelPath, Class<T> clazz, int offsetLine, int limitLine, int
            sheetIndex) throws Exception {
        Workbook workbook = WorkbookFactory.create(new File(excelPath));
        return readExcel2ObjectsHandler(workbook, clazz, offsetLine, limitLine, sheetIndex);
    }

    public <T> List<T> readExcel2Objects(InputStream is, Class<T> clazz, int offsetLine, int limitLine, int
            sheetIndex) throws Exception {
        Workbook workbook = WorkbookFactory.create(is);
        return readExcel2ObjectsHandler(workbook, clazz, offsetLine, limitLine, sheetIndex);
    }

    public <T> List<T> readExcel2Objects(String excelPath, Class<T> clazz, int sheetIndex)
            throws Exception {
        return readExcel2Objects(excelPath, clazz, 0, 2499, sheetIndex);
    }

    public <T> List<T> readExcel2Objects(String excelPath, Class<T> clazz)
            throws Exception {
        return readExcel2Objects(excelPath, clazz, 0, Integer.MAX_VALUE, 0);
    }


    public <T> List<T> readExcel2Objects(InputStream is, Class<T> clazz, int sheetIndex)
            throws Exception {
        return readExcel2Objects(is, clazz, 0, Integer.MAX_VALUE, sheetIndex);
    }

    public <T> List<T> readExcel2Objects(InputStream is, Class<T> clazz)
            throws Exception {
        return readExcel2Objects(is, clazz, 0, Integer.MAX_VALUE, 0);
    }

    private <T> List<T> readExcel2ObjectsHandler(Workbook workbook, Class<T> clazz, int offsetLine, int limitLine,
                                                 int sheetIndex) throws Exception {
        Sheet sheet = workbook.getSheetAt(sheetIndex);
        Row row = sheet.getRow(0);
        List<T> list = new ArrayList<>();
        Map<Integer, ExcelHeader> maps = Utils.getHeaderMap(row, clazz);
        if (maps == null || maps.size() <= 0) {
            throw new RuntimeException("要读取的Excel的格式不正确，检查是否设定了合适的行");
        }
        int maxLine = sheet.getLastRowNum() > (offsetLine + limitLine) ? (offsetLine + limitLine) : sheet
                .getLastRowNum();
        for (int i = offsetLine; i <= maxLine; i++) {
            row = sheet.getRow(i);
            T obj = clazz.newInstance();
            for (Cell cell : row) {
                int ci = cell.getColumnIndex();
                ExcelHeader header = maps.get(ci);
                if (null == header) {
                    continue;
                }
                String filed = header.getFiled();
                String val = Utils.getCellValue(cell);
                Object value = Utils.str2TargetClass(val, header.getFiledClazz());
                BeanUtils.copyProperty(obj, filed, value);
            }
            list.add(obj);
        }
        return list;
    }

    /*----------------------------------------读取Excel操作无映射--------------------------------------------------*/
    /*  一. 操作流程 ：                                                                                            */
    /*      *) 按行读取Excel文件,存储形式为  Cell->String => Row->List<Cell> => Excel->List<Row>                    */
    /*  二. 参数说明                                                                                               */
    /*      *) excelPath        =>      目标Excel路径                                                              */
    /*      *) InputStream      =>      目标Excel文件流                                                            */
    /*      *) offsetLine       =>      开始读取行坐标(默认0)                                                       */
    /*      *) limitLine        =>      最大读取行数(默认表尾)                                                      */
    /*      *) sheetIndex       =>      Sheet索引(默认0)                                                           */

    public List<List<String>> readExcel2List(String excelPath, int offsetLine, int limitLine, int sheetIndex)
            throws Exception {

        Workbook workbook = WorkbookFactory.create(new File(excelPath));
        return readExcel2ObjectsHandler(workbook, offsetLine, limitLine, sheetIndex);
    }

    public List<List<String>> readExcel2List(InputStream is, int offsetLine, int limitLine, int sheetIndex)
            throws Exception {

        Workbook workbook = WorkbookFactory.create(is);
        return readExcel2ObjectsHandler(workbook, offsetLine, limitLine, sheetIndex,false);
    }

    public List<List<String>> readExcel2List(String excelPath, int offsetLine)
            throws Exception {

        Workbook workbook = WorkbookFactory.create(new File(excelPath));
        return readExcel2ObjectsHandler(workbook, offsetLine, Integer.MAX_VALUE, 0);
    }

    public List<List<String>> readExcel2List(File file, int offsetLine)
            throws Exception {

        Workbook workbook = WorkbookFactory.create(file);
        return readExcel2ObjectsHandler(workbook, offsetLine, Integer.MAX_VALUE, 0);
    }

    public List<List<String>> readExcel2List(InputStream is, int offsetLine)
            throws Exception {

        Workbook workbook = WorkbookFactory.create(is);
        return readExcel2ObjectsHandler(workbook, offsetLine, Integer.MAX_VALUE, 0);
    }

    public List<List<String>> readExcel2List(String excelPath)
            throws Exception {

        Workbook workbook = WorkbookFactory.create(new File(excelPath));
        return readExcel2ObjectsHandler(workbook, 0, Integer.MAX_VALUE, 0);
    }

    public List<List<String>> readExcel2List(InputStream is)
            throws Exception {

        Workbook workbook = WorkbookFactory.create(is);
        return readExcel2ObjectsHandler(workbook, 0, Integer.MAX_VALUE, 0);
    }

    public List<List<String>> readExcel2ListNoIgnoreNull(InputStream is)
            throws Exception {

        Workbook workbook = WorkbookFactory.create(is);
        return readExcel2ObjectsHandler (workbook, 0, Integer.MAX_VALUE, 0,false);
    }

    private List<List<String>> readExcel2ObjectsHandler(Workbook workbook, int offsetLine, int limitLine, int
            sheetIndex)
            throws Exception {

        List<List<String>> list = new ArrayList<>();
        Sheet sheet = workbook.getSheetAt(sheetIndex);
        int maxLine = sheet.getLastRowNum() > (offsetLine + limitLine) ? (offsetLine + limitLine) : sheet
                .getLastRowNum();
        for (int i = offsetLine; i <= maxLine; i++) {
            List<String> rows = new ArrayList<>();
            Row row = sheet.getRow(i);
            for (Cell cell : row) {
                String val = Utils.getCellValue(cell);
                rows.add(val);
            }
            list.add(rows);
        }
        return list;
    }

    private List<List<String>> readExcel2ObjectsHandler(Workbook workbook, int offsetLine, int limitLine, int
            sheetIndex,Boolean ignore)
            throws Exception {

        List<List<String>> list = new ArrayList<>();
        Sheet sheet = workbook.getSheetAt(sheetIndex);
        int maxLine = sheet.getLastRowNum() > (offsetLine + limitLine) ? (offsetLine + limitLine) : sheet
                .getLastRowNum();
        int colNum = -1;
        if(ignore != null && !ignore){
            colNum = 0;
            Row row = sheet.getRow(0);
            for (Cell cell : row) {
                colNum++;
            }
        }

        for (int i = offsetLine; i <= maxLine; i++) {
            List<String> rows = new ArrayList<>();
            Row row = sheet.getRow(i);
            colNum = colNum == -1 ? row.getPhysicalNumberOfCells() - 1 : colNum;
            for(int j = 0;j < colNum ; j++){
                String val = "";
                try {
                    val = Utils.getCellValue(row.getCell(j));
                }catch (Exception e){}
                rows.add(val);
            }
            list.add(rows);
        }
        return list;
    }

    private static List<List<String>> readExcel2ObjectsHandler2(SXSSFWorkbook workbook, int offsetLine, int limitLine, int
            sheetIndex,Boolean ignore)
            throws Exception {

        List<List<String>> list = new ArrayList<>();
        Sheet sheet = workbook.getXSSFWorkbook().getSheetAt(sheetIndex);
        int maxLine = sheet.getLastRowNum() > (offsetLine + limitLine) ? (offsetLine + limitLine) : sheet
                .getLastRowNum();
        int colNum = -1;
        if(ignore != null && !ignore){
            colNum = 0;
            Row row = sheet.getRow(0);
            for (Cell cell : row) {
                colNum++;
            }
        }

        for (int i = offsetLine; i <= maxLine; i++) {
            List<String> rows = new ArrayList<>();
            Row row = sheet.getRow(i);
            colNum = colNum == -1 ? row.getPhysicalNumberOfCells() - 1 : colNum;
            for(int j = 0;j < colNum ; j++){
                String val = "";
                try {
                    val = Utils.getCellValue(row.getCell(j));
                }catch (Exception e){}
                rows.add(val);
            }
            if(!rowIsEmpty(rows)){
                list.add(rows);
            }
        }
        return list;
    }

    private static  boolean rowIsEmpty(List<String> row){
        for(String cell:row){
            if(StringUtils.isNotEmpty(cell)){
                return false;
            }
        }
        return true;
    }


    /*----------------------------------------无模板基于注解导出---------------------------------------------------*/
    /*  一. 操作流程 ：                                                                                            */
    /*      1) 根据Java对象映射表头                                                                                */
    /*      2) 写入数据内容                                                                                       */
    /*  二. 参数说明                                                                                              */
    /*      *) data             =>      导出内容List集合                                                          */
    /*      *) isWriteHeader    =>      是否写入表头                                                              */
    /*      *) sheetName        =>      Sheet索引名(默认0)                                                        */
    /*      *) clazz            =>      映射对象Class                                                             */
    /*      *) isXSSF           =>      是否Excel2007以上                                                         */
    /*      *) targetPath       =>      导出文件路径                                                              */
    /*      *) os               =>      导出文件流                                                                */
    public void exportObjects2Excel(List<?> data, Class clazz, boolean isWriteHeader, String sheetName, boolean isXSSF,
                                    String targetPath) throws Exception {

        FileOutputStream fos = new FileOutputStream(targetPath);
        exportExcelNoModuleHandler(data, clazz, isWriteHeader, sheetName, isXSSF).write(fos);
    }

    public void exportObjects2Excel(List<?> data, Class clazz, boolean isWriteHeader, String sheetName, boolean isXSSF,
                                    OutputStream os) throws Exception {

        exportExcelNoModuleHandler(data, clazz, isWriteHeader, sheetName, isXSSF).write(os);
    }

    public void exportObjects2Excel(List<?> data, Class clazz, boolean isWriteHeader, String targetPath)
            throws Exception {

        FileOutputStream fos = new FileOutputStream(targetPath);
        exportExcelNoModuleHandler(data, clazz, isWriteHeader, null, true).write(fos);
    }

    public void exportObjects2Excel(List<?> data, Class clazz, boolean isWriteHeader, OutputStream os)
            throws Exception {

        exportExcelNoModuleHandler(data, clazz, isWriteHeader, null, true).write(os);
    }

    private Workbook exportExcelNoModuleHandler(List<?> data, Class clazz, boolean isWriteHeader, String sheetName,
                                                boolean isXSSF) throws Exception {

        Workbook workbook;
        if (isXSSF) {
            workbook = new XSSFWorkbook();
        } else {
            workbook = new HSSFWorkbook();
        }
        Sheet sheet;
        if (null != sheetName && !"".equals(sheetName)) {
            sheet = workbook.createSheet(sheetName);
        } else {
            sheet = workbook.createSheet();
        }
        Row row = sheet.createRow(0);
        List<ExcelHeader> headers = Utils.getHeaderList(clazz);
        if (isWriteHeader) {
            // 写标题
            for (int i = 0; i < headers.size(); i++) {
                row.createCell(i).setCellValue(headers.get(i).getTitle());
            }
        }
        // 写数据
        Object _data;
        for (int i = 0; i < data.size(); i++) {
            row = sheet.createRow(i + 1);
            _data = data.get(i);
            for (int j = 0; j < headers.size(); j++) {
                row.createCell(j).setCellValue(BeanUtils.getProperty(_data, headers.get(j).getFiled()));
            }
        }
        return workbook;
    }

    /*-----------------------------------------无模板无注解导出----------------------------------------------------*/
    /*  一. 操作流程 ：                                                                                           */
    /*      1) 写入表头内容(可选)                                                                                  */
    /*      2) 写入数据内容                                                                                       */
    /*  二. 参数说明                                                                                              */
    /*      *) data             =>      导出内容List集合                                                          */
    /*      *) header           =>      表头集合,有则写,无则不写                                                   */
    /*      *) sheetName        =>      Sheet索引名(默认0)                                                        */
    /*      *) isXSSF           =>      是否Excel2007以上                                                         */
    /*      *) targetPath       =>      导出文件路径                                                              */
    /*      *) os               =>      导出文件流                                                                */

    public void exportObjects2Excel(List<?> data, List<String> header, String sheetName, boolean isXSSF, String
            targetPath) throws Exception {

        exportExcelNoModuleHandler(data, header, sheetName, isXSSF).write(new FileOutputStream(targetPath));
    }

    public void exportObjects2Excel(List<?> data, List<String> header, String sheetName, boolean isXSSF,
                                    OutputStream os) throws Exception {

        exportExcelNoModuleHandler(data, header, sheetName, isXSSF).write(os);
    }

    public void exportObjects2Excel(List<?> data, List<String> header, String targetPath) throws Exception {

        exportExcelNoModuleHandler(data, header, null, true)
                .write(new FileOutputStream(targetPath));
    }

    public void exportObjects2Excel(List<?> data, List<String> header, OutputStream os) throws Exception {

        exportExcelNoModuleHandler(data, header, null, true).write(os);
    }

    public byte[] exportObjects2ExcelByte(List<?> data, List<String> header, OutputStream os) throws Exception {

        Workbook  workbook = exportExcelNoModuleHandler(data, header, null, true);
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            workbook.write(out);
            ByteString byteString = ByteString.copyFrom(out.toByteArray());
            return byteString.toByteArray();
        } catch (IOException e) {
            throw new IllegalStateException("导出excel binary流关闭失败");
        }
    }
    public void exportObjects2ExcelTem(List<?> data,Map<String,String[]> headMap, OutputStream os) throws Exception {

        exportExcelNoModuleHandlerTem(data,headMap, null, true).write(os);
    }

    public void exportObjects2Excel(List<?> data, String targetPath) throws Exception {

        exportExcelNoModuleHandler(data, null, null, true)
                .write(new FileOutputStream(targetPath));
    }

    public void exportObjects2Excel(List<?> data, OutputStream os) throws Exception {

        exportExcelNoModuleHandler(data, null, null, true).write(os);
    }

    private Workbook exportExcelNoModuleHandler(List<?> data, List<String> header, String sheetName, boolean isXSSF)
            throws Exception {

        Workbook workbook;
        if (isXSSF) {
            workbook = new XSSFWorkbook();
        } else {
            workbook = new HSSFWorkbook();
        }
        Sheet sheet;
        if (null != sheetName && !"".equals(sheetName)) {
            sheet = workbook.createSheet(sheetName);
        } else {
            sheet = workbook.createSheet();
        }

        int rowIndex = 0;
        if (null != header && header.size() > 0) {
            // 写标题
            Row row = sheet.createRow(rowIndex);
            for (int i = 0; i < header.size(); i++) {
                row.createCell(i, CellType.STRING).setCellValue(header.get(i));
            }
            rowIndex++;
        }
        for (Object object : data) {
            Row row = sheet.createRow(rowIndex);
            if (object.getClass().isArray()) {
                for (int j = 0; j < Array.getLength(object); j++) {
                    row.createCell(j, CellType.STRING).setCellValue(Array.get(object, j).toString());
                }
            } else if (object instanceof Collection) {
                Collection<?> items = (Collection<?>) object;
                int j = 0;
                for (Object item : items) {
                    row.createCell(j, CellType.STRING).setCellValue(item == null ? null : item.toString());
                    j++;
                }
            } else {
                row.createCell(0,CellType.STRING).setCellValue(object.toString());
            }
            rowIndex++;
        }
        //设置自动列宽
        for (int i = 0; i < header.size(); i++) {
            sheet.autoSizeColumn(i);
            int columnWidth=sheet.getColumnWidth(i)*15/10;
            if(columnWidth<255*256){
                sheet.setColumnWidth(i,columnWidth);
            }else {
                sheet.setColumnWidth(i,255*256-1);
            }
        }
        return workbook;
    }


    private Workbook exportExcelNoModuleHandlerTem(List<?> data,Map<String,String[]> headMap, String sheetName, boolean isXSSF)
            throws Exception {

        Workbook workbook;
        if (isXSSF) {
            workbook = new XSSFWorkbook();
        } else {
            workbook = new HSSFWorkbook();
        }
        Sheet sheet;
        if (null != sheetName && !"".equals(sheetName)) {
            sheet = workbook.createSheet(sheetName);
        } else {
            sheet = workbook.createSheet();
        }

        int rowIndex = 0;

        DataValidationHelper helper = sheet.getDataValidationHelper();
        Set<String> keySet = headMap.keySet();
        String[] headers = keySet.toArray(new String[keySet.size()]);
        int lastRow = (data == null || data.size() == 0) ? 500 : data.size();
        for(int i = 0;i<headers.length;i++){
            //CellRangeAddressList(firstRow, lastRow, firstCol, lastCol)设置行列范围
            String[] pos = headMap.get(headers[i]);//{"是","否"};
            if(pos == null || pos.length == 0){
                continue;
            }
            CellRangeAddressList addressList = new CellRangeAddressList(1, lastRow, i, i);

            //设置下拉框数据

            DataValidationConstraint constraint = helper.createExplicitListConstraint(pos);
            DataValidation dataValidation = helper.createValidation(constraint, addressList);

            //处理Excel兼容性问题
            if(dataValidation instanceof XSSFDataValidation) {
                dataValidation.setSuppressDropDownArrow(true);
                dataValidation.setShowErrorBox(true);
            }else {
                dataValidation.setSuppressDropDownArrow(false);
            }

            sheet.addValidationData(dataValidation);
        }

//        sheet.setDefaultColumnStyle(short column, CellStyle style)，

        if (null != headers && headers.length > 0) {
            // 写标题
            Row row = sheet.createRow(rowIndex);
            for (int i = 0; i < headers.length; i++) {
                row.createCell(i, CellType.STRING).setCellValue(headers[i]);
            }
            rowIndex++;
        }

//        Integer[] typeArr = news Integer[types.size()];
//
//        types.toArray(typeArr);
//        for(int i = 0;i<10;i++){
//            Row row = sheet.createRow(rowIndex);
//            for (int j = 0; j < header.size(); j++) {
//                Cell cell = row.createCell(j);
//                CellStyle cellStyle = workbook.createCellStyle();
//                if(typeArr[j]==1){
//                    CreationHelper creationHelper = workbook.getCreationHelper();
//                    cellStyle.setDataFormat(creationHelper.createDataFormat().getFormat("yyyy-MM-dd"));
//                    cell.setCellValue(news Date());
//                }
//
//                cell.setCellStyle(cellStyle);
//            }
//            rowIndex++;
//        }

        for (Object object : data) {
            Row row = sheet.createRow(rowIndex);
            if (object.getClass().isArray()) {
                for (int j = 0; j < Array.getLength(object); j++) {
                    row.createCell(j, CellType.STRING).setCellValue(Array.get(object, j).toString());
                }
            } else if (object instanceof Collection) {
                Collection<?> items = (Collection<?>) object;
                int j = 0;
                for (Object item : items) {
                    row.createCell(j,CellType.STRING).setCellValue(item == null ? null : item.toString());
                    j++;
                }
            } else {
                row.createCell(0, CellType.STRING).setCellValue(object.toString());
            }

            rowIndex++;
        }

        //设置自动列宽
        for (int i = 0; i < headers.length; i++) {
            sheet.autoSizeColumn(i);
//            sheet.setColumnWidth(i,sheet.getColumnWidth(i)*15/10);
        }

        return workbook;
    }
    /*************************************** 读取为null的格子默认为"" ********************************************/

    public static List<List<String>> readExcel2ListAndAll(InputStream is)
            throws Exception {

//        SXSSFWorkbook workbook=news SXSSFWorkbook(news XSSFWorkbook(is));
//        workbook.setCompressTempFiles(true); // temp files will be gzipped
        OPCPackage pkg =  OPCPackage.open(is);
        SXSSFWorkbook workbook = new SXSSFWorkbook(new XSSFWorkbook(pkg));
        return readExcel2ObjectsHandler2(workbook, 0, Integer.MAX_VALUE, 0,false);
    }

    /*************************************读取指定行的数据*******************************************/
    // 该方法处理excel的数据
    public static List<String>  readExcel(InputStream is, int sheetIndex, List<Map<String, Object>> readValues) throws Exception {
        List<String> header=new ArrayList<>();
        Workbook wb = WorkbookFactory.create(is);;// 获取Excel文件对象
        Sheet sheet = wb.getSheetAt(sheetIndex);// 获取文件的指定工作表m
        FormulaEvaluator evaluator = wb.getCreationHelper()
                .createFormulaEvaluator();//考虑到有些表格位置值为计算的结果，这里为获取计算结果值，避免把公式读出来了
        for (Map<String, Object> info : readValues){//通过readValues遍历key和value
            Row row = sheet.getRow((int)info.get("y"));// 获取行
            Cell cell = row.getCell((int)info.get("x"));// 获取列
            CellValue cellValue = evaluator.evaluate(cell);// 获表格公式计算后的值
            if(cellValue != null){
                header.add(cellValue.getStringValue());
            }else{
                header.add("");
            }
        }
        return header;
    }

    /**
     * y:第几行
     * i：从第0个开始取几个
     * @param y
     * @param i
     * @return
     */
    public static List<Map<String, Object>> getReadValues(int y,int i){
        List<Map<String, Object>> readValues = new ArrayList<Map<String, Object>>();
        for (int j = 0; j < i; j++) {
            Map<String, Object> readValue = new HashMap<String, Object>();
            //横坐标
            readValue.put("x", j);
            //纵坐标
            readValue.put("y", y);
            readValues.add(readValue);
        }
        return readValues;
    }


}
