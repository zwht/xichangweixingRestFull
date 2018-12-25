package org.poem.hdfs;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataInputStream;
import org.apache.hadoop.fs.FSDataOutputStream;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;

/**
 * @Author Froid_Li
 * @Email 269504518@qq.com
 * @Date 2017/12/4  13:16
 */
public class HdfsFileSystem {
    private static Logger logger = LoggerFactory.getLogger(HdfsFileSystem.class);

    /**
     * 按路径上传文件到hdfs
     *
     * @param conf
     * @param localPath
     * @param hdfsPath
     * @throws IOException
     */
    public static void uploadFile(Configuration conf, String localPath, String hdfsPath) throws IOException {
        try {
            FileSystem fs = FileSystem.get(URI.create(hdfsPath), conf);
            fs.copyFromLocalFile(new Path(localPath), new Path(hdfsPath));
            fs.close();
            logger.info("copy from: " + localPath + " to " + hdfsPath);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 按路径下载hdfs上的文件
     *
     * @param conf
     * @param hdfsPath
     * @param localPath
     * @throws IOException
     */
    public static void downloadFile(Configuration conf, String hdfsPath, String localPath) throws IOException {
        try {
            FileSystem fs = FileSystem.get(URI.create(hdfsPath), conf);
            fs.copyToLocalFile(new Path(hdfsPath), new Path(localPath));
            fs.close();
            logger.info("download: from" + hdfsPath + " to " + localPath);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * File对象上传到hdfs
     *
     * @param conf
     * @param contents
     * @param hdfsPath
     * @throws IOException
     */
    public static void createFile(Configuration conf, byte[] contents, String hdfsPath) throws IOException {
        FileSystem fileSystem = FileSystem.get(URI.create(hdfsPath), conf);
        FSDataOutputStream out = fileSystem.create(new Path(hdfsPath));
        try {

            out.write(contents);
            out.hsync();
            out.flush();
            logger.info("create file in hdfs:" + hdfsPath);

        } finally {
            if (out != null)
                out.close();
        }
        fileSystem.close();

    }

    /**
     * 下载hdfs文件内容，保存到内存对象中
     *
     * @param hdfsPath
     * @param conf
     * @return
     * @throws Exception
     */
    public static byte[] downloadFileToByte(String hdfsPath, Configuration conf) throws Exception {
        Path path = new Path(hdfsPath);
        FileSystem fs = FileSystem.get(URI.create(hdfsPath), conf);
        if (fs.exists(path)) {
            //如果是文件
            FileOutputStream out = null;
            FSDataInputStream in = fs.open(new Path(hdfsPath));
            byte[] data = new byte[in.available()];
//            in.read(data);
            in.readFully(0, data);
            in.close();
            logger.info("download file to Bytes:" + hdfsPath);
            return data;
        } else throw new Exception();
    }


    /**
     * @param conf
     * @param hdfsPath
     * @throws IOException
     */
    public static void mkdir(Configuration conf, String hdfsPath) throws IOException {
        FileSystem fs = FileSystem.get(conf);
        fs.mkdirs(new Path(hdfsPath));

        fs.close();
    }

    public static void deleteFile(Configuration conf, String hdfsPath) throws Exception {
        FileSystem fs = FileSystem.get(URI.create(hdfsPath), conf);
        fs.delete(new Path(hdfsPath));
    }
}
