package org.poem.init;


import org.poem.division.AdminDivisionDao;
import org.poem.jooq.tables.records.CAdminDivisionRecord;
import org.postgresql.copy.CopyManager;
import org.postgresql.core.BaseConnection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Optional;

/**
 *  @author         jamie  
 *  @version        V1.0   
 *  @date           2018/6/15 15:52  
 */
@Service
public class InitService  {


    @Autowired
    private AdminDivisionDao divisionDao;

    @Value("${spring.datasource.driverClassName}")
    private String driverClass;
    @Value("${spring.datasource.url}")
    private String url;
    @Value("${spring.datasource.username}")
    private String user;
    @Value("${spring.datasource.password}")
    private String password;

    public void init() {
        loadDivisionDatas();
    }

    private void loadDivisionDatas() {
        InputStream in=null;
        Connection connection=null;
        try {
            Optional<CAdminDivisionRecord> optionalDivision = divisionDao.fetchAny();
            if (optionalDivision.isPresent()) {
                return;
            }
            in= this.getClass().getClassLoader().getResourceAsStream("division/load__fileName.csv");
            if(in!=null){
                Class.forName(driverClass);
                connection= DriverManager.getConnection(url,user,password);
                connection.setAutoCommit(false);
                CopyManager copyManager=((BaseConnection) connection).getCopyAPI();
                String copySql = "COPY c_admin_division FROM STDIN DELIMITER AS ',' CSV QUOTE  AS '\"' ";
                copyManager.copyIn(copySql,new InputStreamReader(in,"UTF-8"));
                String[] updateSqls={"UPDATE c_admin_division set city_code=null WHERE city_code=-1",
                        "UPDATE c_admin_division set county_code=null WHERE county_code=-1",
                        "UPDATE c_admin_division set town_code=null WHERE town_code=-1",
                        "UPDATE c_admin_division set village_code=null WHERE village_code=-1",
                        "UPDATE c_admin_division set city_town_classify_code=null WHERE city_town_classify_code=-1"
                         };
                executeUpdateSql(connection,updateSqls);
                connection.commit();
            }
        } catch (Exception e) {
            try {
                if(connection!=null){
                    connection.rollback();
                }
            } catch (SQLException e1) {
                e1.printStackTrace();
            }
            e.printStackTrace();
        } finally {
            if(connection!=null){
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(in != null){
                try {
                    in.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    public void executeUpdateSql(Connection connection,String... sqls) throws SQLException {
        if(connection ==null || connection.isClosed()){
            return;
        }
        if(sqls==null||sqls.length==0){
            return;
        }
        Statement stmt=null;
        try {
            stmt=connection.createStatement();
            for(String sql:sqls){
                stmt.executeUpdate(sql);
            }
        } finally {
            if(stmt!=null){
                stmt.close();
            }
        }

    }



}
