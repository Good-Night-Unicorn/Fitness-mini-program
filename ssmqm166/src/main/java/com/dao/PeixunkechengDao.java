package com.dao;

import com.entity.PeixunkechengEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.PeixunkechengVO;
import com.entity.view.PeixunkechengView;


/**
 * 培训课程
 * 
 * @author 
 * @email 
 * @date 2021-04-30 23:15:03
 */
public interface PeixunkechengDao extends BaseMapper<PeixunkechengEntity> {
	
	List<PeixunkechengVO> selectListVO(@Param("ew") Wrapper<PeixunkechengEntity> wrapper);
	
	PeixunkechengVO selectVO(@Param("ew") Wrapper<PeixunkechengEntity> wrapper);
	
	List<PeixunkechengView> selectListView(@Param("ew") Wrapper<PeixunkechengEntity> wrapper);

	List<PeixunkechengView> selectListView(Pagination page,@Param("ew") Wrapper<PeixunkechengEntity> wrapper);
	
	PeixunkechengView selectView(@Param("ew") Wrapper<PeixunkechengEntity> wrapper);
	
}
