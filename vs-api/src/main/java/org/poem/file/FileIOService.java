package org.poem.file;

import java.io.InputStream;
import java.io.OutputStream;

public interface FileIOService {

    String saveFile(InputStream in) throws Exception;

    String saveFile(InputStream in, String suffix) throws Exception;

    void outPutFile(String filePath, OutputStream os, boolean close) throws Exception;

    byte[] getFileBytes(String filePath)throws Exception;

    boolean deleteFile(String filePath);
}
