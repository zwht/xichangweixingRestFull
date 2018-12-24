package org.poem.file;

import com.fasterxml.jackson.annotation.JsonFormat;


/**
 *
 * @author poem
 */
public class FileAddVo {
    private String name;
    private String fileType;
    @JsonFormat(shape=JsonFormat.Shape.STRING)
    private Long fileSize;
    private String fileUrl;


    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public Long getFileSize() {
        return fileSize;
    }

    public void setFileSize(Long fileSize) {
        this.fileSize = fileSize;
    }
}
