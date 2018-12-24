package org.poem.file;

import org.poem.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service("localIOService")
public class LocalFileIOServiceImpl implements FileIOService {

    private static final int MAX_FILE_SIZE=200;

    @Value("${upload.dir}")
    private String ROOT_DIR;

    @Override
    public byte[] getFileBytes(String filePath) throws Exception {
        File file=new File(filePath);
        if(!file.exists()||file.isDirectory()){
            throw new Exception("path:"+filePath+" not found!");
        }
        if(file.length()>MAX_FILE_SIZE*1024*1024L){
            throw new Exception("file:"+filePath+" is too large!");
        }
        return Files.readAllBytes(file.toPath());
    }

    @Override
    public String saveFile(InputStream in) throws Exception {
       return  writeInputStreamToFile(in,"");
    }

    private String writeInputStreamToFile(InputStream in,String suffix) throws IOException {
        try {
            File newFile=new File(ROOT_DIR+"/"+ UUID.randomUUID().toString()+suffix);
            if(!newFile.getParentFile().exists()){
                newFile.getParentFile().mkdirs();
            }
            newFile.createNewFile();
            Files.copy(in,newFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
            return newFile.getAbsolutePath();
        } finally {
            in.close();
        }
    }

    @Override
    public void outPutFile(String filePath, OutputStream os, boolean close) throws Exception {
        try {
            File sourceFile=new File(filePath);
            if(!sourceFile.exists()||sourceFile.isDirectory()){
                throw new Exception("path:"+filePath+" not found!");
            }
            Files.copy(sourceFile.toPath(),os);
        } finally {
            if(close && os !=null){
                os.close();
            }
        }
    }

    @Override
    public boolean deleteFile(String filePath) {
        try {
            Files.delete(new File(filePath).toPath());
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public String saveFile(InputStream in, String suffix) throws Exception {
        if(StringUtils.isEmpty(suffix)){
            return saveFile(in);
        }
        return writeInputStreamToFile(in,suffix);
    }
}
