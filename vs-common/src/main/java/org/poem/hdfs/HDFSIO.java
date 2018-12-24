/**
 * Copyright 2017 Institute of Computing Technology, Chinese Academy of Sciences.
 * Licensed under the terms of the Apache 2.0 license.
 * Please see LICENSE file in the project root for terms
 */
package org.poem.hdfs;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.io.FilenameUtils;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;
import org.apache.hadoop.fs.permission.FsAction;
import org.apache.hadoop.fs.permission.FsPermission;
import org.apache.hadoop.io.IOUtils;
import org.apache.log4j.Logger;
import org.poem.constant.ErrorCode;
import org.poem.authVO.ResultVO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Utility functions for HDFS
 */
@Component
public class HDFSIO {

    @Value("${hdfs.ip}")
    private String IP;
    @Value("${hdfs.port}")
    private String PORT;

    @Value("${hdfs.filePath}")
    private String ROOTDIR;

    public static final long MAX_DOWNLOADABLE_FILE_SIZE = 200 * 1024 * 1024;
    private static Logger logger = Logger.getLogger(HDFSIO.class.getName());
    private static Configuration conf = new Configuration();
    private static FileSystem fs;

    public String NAME_NODE = "";

    public String getROOTDIR() {
        return ROOTDIR;
    }

    @PostConstruct
    public void init() {
        NAME_NODE = "hdfs://" + IP + ":" + PORT;
        conf.set("fs.default.name", NAME_NODE);
        conf.setBoolean("fs.hdfs.impl.disable.cache", true);
        //Wheather client use hostname to visit datanode or not
        conf.set("dfs.client.use.datanode.hostname", "true");
        //conf.set("fs.hdfs.impl", "org.apache.hadoop.hdfs.DistributedFileSystem");
        try {
            fs = FileSystem.get(conf);
            logger.info("HDFSIO...");
            logger.info(fs.getUri());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * Write a file in hdfs
     *
     * @param path    target file path
     * @param content file content
     * @throws IOException
     */
    public void upload(String path, String content, boolean overwrite) throws IOException {
        Path fullPath = new Path(ROOTDIR + path);
        if (fs.exists(fullPath)) {
            if (overwrite) {
                fs.delete(fullPath, false);
            }
        }
        OutputStream out = fs.create(fullPath);
        InputStream rf = new ByteArrayInputStream(content.getBytes());
        IOUtils.copyBytes(rf, out, 4096, true);
        out.close();
    }

    /**
     * 上传文件
     *
     * @param file 文件对象
     * @return 文件访问地址
     * @throws IOException
     */
    public String uploadFile(MultipartFile file) throws IOException {
        String path = UUID.randomUUID().toString() + "." + FilenameUtils.getExtension(file.getOriginalFilename());
        Path fullPath = new Path(ROOTDIR + path);
        OutputStream out = fs.create(fullPath);
        InputStream rf = file.getInputStream();//news ByteArrayInputStream(content.getBytes());
        IOUtils.copyBytes(rf, out, 4096, true);
        out.close();
        return fullPath.toUri().getPath();
    }

    public String uploadFile(InputStream in) throws IOException {
        String path = UUID.randomUUID().toString();
        Path fullPath = new Path(ROOTDIR + path);
        OutputStream out = fs.create(fullPath);
        IOUtils.copyBytes(in, out, 4096, true);
        out.close();
        return fullPath.toUri().getPath();
    }

    public String uploadFile(InputStream in, String fileExtension) throws IOException {
        String path = UUID.randomUUID().toString() + fileExtension;
        Path fullPath = new Path(ROOTDIR + path);
        OutputStream out = fs.create(fullPath);
        IOUtils.copyBytes(in, out, 4096, true);
        out.close();
        return fullPath.toUri().getPath();
    }

    public String uploadFile(byte[] bytes, String fileExtension) throws IOException {
        String path = UUID.randomUUID().toString() + "." + fileExtension;
        Path fullPath = new Path(ROOTDIR + path);
        OutputStream out = fs.create(fullPath);
        InputStream rf = new ByteArrayInputStream(bytes);
        IOUtils.copyBytes(rf, out, 4096, true);
        out.close();
        return fullPath.toUri().getPath();
    }

    public void uploadOverwrite(String localPath, String distDir, String fileName) throws IOException {
        Path distHdfsDir = new Path(distDir);
        Path distFile = new Path(distHdfsDir, fileName);
        if (!fs.exists(distHdfsDir)) {
            fs.mkdirs(distHdfsDir);
        }
        if (fs.exists(distFile)) {
            fs.delete(distFile, false);
        }
        fs.copyFromLocalFile(new Path(localPath), distFile);
    }

    /**
     * Upload file to HDFS
     *
     * @param uri  target file path
     * @param item file to upload
     * @param name name of the news file
     * @throws IOException
     */
    public void uploadfile(String uri, FileItem item, String name)
            throws IOException {
        System.out.println("[dstPath]" + NAME_NODE + "/" + uri + name);
        FSDataOutputStream out = fs.create(new Path(uri
                + name));
        IOUtils.copyBytes(item.getInputStream(), out, 4096, true);
    }

    public void writeToOutputStream(String path, OutputStream os) throws Exception {
        Path sourcePath = new Path(path);
        if (!fs.exists(sourcePath)) {
            throw new IOException("Source file not found!");
        }
        if (HDFSIO.getFileSize(path) > MAX_DOWNLOADABLE_FILE_SIZE) {
            throw new Exception("Exceed max downloadable size");
        }
        if (fs.isFile(sourcePath)) {
            FSDataInputStream is = fs.open(sourcePath);
            IOUtils.copyBytes(is, os, 4096, false);
            is.close();
            return;
        }
        FileStatus[] statuses = fs.listStatus(sourcePath);
        if (statuses.length == 0) {
            throw new IOException("Source dir is empty");
        }
        FSDataInputStream is;
        for (FileStatus status : statuses) {
            if (fs.isDirectory(status.getPath()) || !status.getPath().getName().startsWith("part-")) {
                continue;
            }
            is = fs.open(status.getPath());
            IOUtils.copyBytes(is, os, 4096, false);
            is.close();
        }
    }

    /**
     * Delete file in HDFS
     *
     * @param filePath target file path
     * @throws IOException
     */
    public void delete(String filePath) throws IOException {
        Path path = new Path(filePath);
        if (fs.exists(path)) {
            boolean ok = fs.delete(path, true);
            logger.info("delete path:" + path + " " + (ok ? "successed" : "failed"));
        }
    }

    public static void remove(Path path) throws IOException {
        fs.delete(path, true);
    }

    /**
     * Cat method
     *
     * @param uri
     * @return inputstream of cat file
     * @throws Exception
     */
    public InputStream getInputStream(String uri) throws IOException {
        Path path = new Path(uri);
        logger.info("uri: " + uri);
        if (!fs.exists(path)) {
            return null;
        }
        if (fs.isDirectory(path)) {
            logger.info("uri: " + uri);
            return searchFile(path);
        } else {
            InputStream in = fs.open(new Path(uri));
            return in;
        }
    }

    public byte[] downloadFile(String uri) {
        try {
            byte[] downloadBytes = org.apache.commons.io.IOUtils.toByteArray(getInputStream(uri));
            logger.info("downloadBytes: " + downloadBytes);
            return downloadBytes;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * Download file in HDFS
     *
     * @param uri of file to download
     * @return inputstream of the file to download
     * @throws Exception
     */
    public static InputStream downInputStream(String uri) throws IOException {
        Path path = new Path(uri);
        if (!fs.exists(path)) {
            return null;
        }
        if (fs.isDirectory(path)) {
            return searchFile(path);
        } else {
            InputStream in = fs.open(new Path(uri));
            return in;
        }
    }

    /**
     * Search File in HDFS
     *
     * @param path search path
     * @return input stream
     * @throws IOException
     */
    private static InputStream searchFile(Path path) throws IOException {
        logger.info("path: " + path);
        FileStatus[] status = fs.listStatus(path);
        InputStream in = null;
        if (status == null || status.length == 0) {
            return null;
        }

        path = status[0].getPath();
        for (FileStatus s : status) {
            if (!fs.isDirectory(s.getPath())) {
                if (!s.getPath().getName().equals("_SUCCESS")) {
                    in = fs.open(s.getPath());
                    return in;
                }
            } else {
                in = searchFile(s.getPath());
                if (in != null) {
                    return in;
                }
            }

        }

        return null;
    }

    /**
     * The same method as hdfs dfs -cat
     *
     * @param uri target file uri
     * @return content string in file
     * @throws IOException
     */
    public String cat(String uri) throws IOException {
        InputStream in = getInputStream(uri);
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        IOUtils.copyBytes(in, out, 4096, true);
        return out.toString();
    }

    public ResultVO<List<String>> readDir(String path, int lines) throws IOException {
        Path hdfsPath = new Path(path);
        if (!fs.exists(hdfsPath)) {
            return new ResultVO<>(ErrorCode.FileNotFound.getErrorCode());
        }
        if (fs.isFile(hdfsPath)) {
            return readLines(path, lines);
        }
        FileStatus[] status = fs.listStatus(hdfsPath);
        List<String> content = new ArrayList<>();
        int line = 0;
        if (status == null || status.length == 0) {
            return null;
        }
        for (FileStatus s : status) {
            if (fs.isDirectory(s.getPath()) || !s.getPath().getName().startsWith("part-")) {
                continue;
            }
            InputStream in = null;
            BufferedReader bufferedReader = null;
            try {
                in = fs.open(s.getPath());
                bufferedReader = new BufferedReader(new InputStreamReader(in));
                String lineTxt = null;
                while ((lineTxt = bufferedReader.readLine()) != null && line <= lines) {
                    content.add(lineTxt);
                    line++;
                }
            } catch (Exception e) {
                logger.error(e.getMessage(), e);
            } finally {
                if (in != null) {
                    try {
                        in.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
                if (bufferedReader != null) {
                    try {
                        bufferedReader.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
        return new ResultVO<>(0, content);
    }

    public ResultVO<List<String>> readLines(String path, int lines) {
        InputStream in = null;
        BufferedReader bufferedReader = null;
        try {
            in = getInputStream(path);
            bufferedReader = new BufferedReader(new InputStreamReader(in));
            String lineTxt = null;
            int line = 0;
            List<String> content = new ArrayList<>();
            while ((lineTxt = bufferedReader.readLine()) != null && line <= lines) {
                content.add(lineTxt);
                line++;
            }
            return new ResultVO<>(0, content);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResultVO<>(ErrorCode.FileNotFound.getErrorCode());
        } finally {
            if (in != null) {
                try {
                    in.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    /**
     * Return the paths of files under directory uri
     */
    public static Path[] list(String uri) throws IOException {

        Path path = new Path(uri);
        if (!fs.exists(path)) {
            return null;
        }
        FileStatus[] status = fs.listStatus(new Path(uri));
        Path[] listedPaths = FileUtil.stat2Paths(status);
        return listedPaths;
    }

    /**
     * Make directory in the uri position
     *
     * @param uri target position
     * @return whether success or not
     * @throws IOException
     */
    public boolean mkdirs(String uri) throws IOException {
        Path path = new Path(uri);
        System.out.println("[mkdirs]" + path.toString());

        FsPermission dirPerm = new FsPermission(FsAction.ALL, FsAction.ALL, FsAction.ALL);
        Boolean flag = fs.mkdirs(path);
        if (flag) {
            fs.setPermission(path, new FsPermission(dirPerm));
        }
        return flag;
    }

    /**
     * Whether a file is exit or not
     *
     * @param uri target file uri
     * @return true/false
     * @throws IOException
     */
    public static boolean exist(String uri) throws IOException {
        return fs.exists(new Path(uri));
    }

    /**
     * Copy method
     *
     * @param src_uri Source file uri
     * @param dst_uri destination uri
     * @throws Exception
     */
    public static void copy(String src_uri, String dst_uri) throws IOException {
        FileUtil.copy(fs, new Path(src_uri), fs, new Path(dst_uri), false, conf);
    }


    /**
     * Rename a file in HDFS
     *
     * @param src target source file
     * @param dst destination file
     * @throws IOException
     */
    public void rename(String src, String dst) throws IOException {
        fs.rename(new Path(src),
                new Path(dst));
    }

    /**
     * The same method as hdfs dfs -head
     *
     * @param uri target file url in HDFS
     * @param n   the position before you need
     * @return
     * @throws IOException
     */
    public static String head(String uri, int n) throws IOException {
        Path[] paths = HDFSIO.list(uri);
        StringBuffer sb = new StringBuffer();
        int line = 0;
        String lineStr = null;
        for (Path temp : paths) {
            InputStream in = HDFSIO.downInputStream(temp.toString());
            if (in == null) {
                continue;
            }
            BufferedReader br = new BufferedReader(new InputStreamReader(in));

            while (line++ < n && (lineStr = br.readLine()) != null) {
                if (lineStr.length() > 1024) {
                    lineStr = lineStr.substring(0, 1024) + "(...)";
                }
                sb.append(lineStr);
                sb.append('\n');
            }
            br.close();
        }
        return sb.toString();
    }

    /**
     * To determine whether the file directory
     *
     * @param path target file path
     * @return
     * @throws IOException
     */
    public static boolean isDirectory(Path path) throws IOException {
        return fs.isDirectory(path);
    }

    /**
     * Read the file or directory size of a file under HDFS
     *
     * @param sourceFile target File or directory path
     * @return The total size of all file sizes in the file size or directory (in KB)
     * @throws IOException
     */
    public static long getFileSize(String sourceFile) throws IOException {
        Path path = new Path(sourceFile);
        long totalSize = 0;
        if (HDFSIO.isDirectory(path)) {
            FileStatus[] statuss = fs.listStatus(path);
            for (FileStatus status : statuss) {
                totalSize += getFileSize(status.getPath().toUri().getPath());
            }
        } else {
            FileStatus status = fs.getFileStatus(path);
            totalSize = status.getLen();
        }
        return totalSize;
    }

    public String copyFile(String srcFile, String distDir) throws IOException {
        Path srcPath = new Path(srcFile);
        Path distPath = new Path(distDir);
        if (!fs.exists(srcPath)) {
            return null;
        }
        if (fs.isDirectory(srcPath)) {
            copyFiles(srcFile, distDir);
            return distDir;
        }
        if (!fs.exists(distPath)) {
            mkdirs(distDir);
        }
        Path distFilePath = new Path(distPath, srcPath.getName());
        FileUtil.copy(fs, srcPath, fs, distFilePath, false, conf);
        return distFilePath.toUri().getPath();
    }

    public boolean copyFiles(String srcDir, String distDir) throws IOException {
        Path srcPath = new Path(srcDir);
        Path distPath = new Path(distDir);
        if (!fs.exists(srcPath) || !HDFSIO.isDirectory(srcPath)) {
            return false;
        }
        if (!fs.exists(distPath)) {
            mkdirs(distDir);
        }
        if (!HDFSIO.isDirectory(distPath)) {
            return false;
        }
        FileStatus contents[] = fs.listStatus(srcPath);
        for (int i = 0; i < contents.length; i++) {
            FileUtil.copy(fs, contents[i], fs,
                    new Path(distPath, contents[i].getPath().getName()),
                    false, true, conf);
        }
        return true;
    }

}
