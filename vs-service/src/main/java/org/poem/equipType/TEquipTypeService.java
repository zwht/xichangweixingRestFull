package org.poem.equipType;

import org.poem.equiptype.TEquipTypeDao;
import org.poem.jooq.tables.TEquipType;
import org.poem.jooq.tables.records.TEquipTypeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 设备类型
 *
 * @author poem
 */
@Service
public class TEquipTypeService {

    @Autowired
    private TEquipTypeDao tEquipTypeDao;

    /**
     * 获取全部
     * @return
     */
    public List<TEquipTypeVO> getAll() {
        List<TEquipTypeRecord> equipTypeRecords = this.tEquipTypeDao.findByCondition(TEquipType.T_EQUIP_TYPE.ID.isNotNull());
        return equipTypeRecords.stream().map(r -> {
            TEquipTypeVO tEquipTypeVO = new TEquipTypeVO();
            tEquipTypeVO.setId(String.valueOf(r.getId()));
            tEquipTypeVO.setName(r.getName());
            tEquipTypeVO.setStatus(String.valueOf(r.getStatus()));
            tEquipTypeVO.setFlag(String.valueOf(r.getFlag()));
            return tEquipTypeVO;
        }).collect(Collectors.toList());
    }
}
