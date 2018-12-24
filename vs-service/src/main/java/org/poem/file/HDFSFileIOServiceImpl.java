package org.poem.file;

import org.poem.hdfs.HDFSIO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * @author poem
 */
@Service("hdfsFileIOService")
public class HDFSFileIOServiceImpl implements FileIOService {

    @Autowired
    HDFSIO hdfsio;

    @Override
    public byte[] getFileBytes(String filePath) throws Exception {
        InputStream in = null;
        ByteArrayOutputStream bos = null;
        byte[] data;
        try {
            in = HDFSIO.downInputStream(filePath);
            bos = new ByteArrayOutputStream();
            byte[] buffer = new byte[8092];
            int length = 0;
            while ((length = in.read(buffer)) != -1) {
                bos.write(buffer, 0, length);
            }
            data = bos.toByteArray();
        } finally {
            if (in != null) {
                in.close();
            }
            if (bos != null) {
                bos.close();
            }
        }
        return data;
    }

    @Override
    public String saveFile(InputStream in) throws Exception {
        return hdfsio.uploadFile(in);
    }

    @Override
    public void outPutFile(String fileId, OutputStream os, boolean close) throws Exception {
        try {
            hdfsio.writeToOutputStream(hdfsio.getROOTDIR() + "/" + fileId, os);
        } finally {
            if (close) {
                os.flush();
                os.close();
            }
        }
    }

    @Override
    public boolean deleteFile(String filePath) {
        try {
            hdfsio.delete(filePath);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public String saveFile(InputStream in, String suffix) throws Exception {
        return hdfsio.uploadFile(in, suffix);
    }
}
