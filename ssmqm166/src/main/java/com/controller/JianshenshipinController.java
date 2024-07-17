package com.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.JianshenshipinEntity;
import com.entity.view.JianshenshipinView;

import com.service.JianshenshipinService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;


/**
 * 健身视频
 * 后端接口
 * @author 
 * @email 
 * @date 2021-04-30 23:15:03
 */
@RestController
@RequestMapping("/jianshenshipin")
public class JianshenshipinController {
    @Autowired
    private JianshenshipinService jianshenshipinService;
    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,JianshenshipinEntity jianshenshipin, 
		HttpServletRequest request){

        EntityWrapper<JianshenshipinEntity> ew = new EntityWrapper<JianshenshipinEntity>();
		PageUtils page = jianshenshipinService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, jianshenshipin), params), params));
        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,JianshenshipinEntity jianshenshipin, 
		HttpServletRequest request){

        EntityWrapper<JianshenshipinEntity> ew = new EntityWrapper<JianshenshipinEntity>();
		PageUtils page = jianshenshipinService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, jianshenshipin), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( JianshenshipinEntity jianshenshipin){
       	EntityWrapper<JianshenshipinEntity> ew = new EntityWrapper<JianshenshipinEntity>();
      	ew.allEq(MPUtil.allEQMapPre( jianshenshipin, "jianshenshipin")); 
        return R.ok().put("data", jianshenshipinService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(JianshenshipinEntity jianshenshipin){
        EntityWrapper< JianshenshipinEntity> ew = new EntityWrapper< JianshenshipinEntity>();
 		ew.allEq(MPUtil.allEQMapPre( jianshenshipin, "jianshenshipin")); 
		JianshenshipinView jianshenshipinView =  jianshenshipinService.selectView(ew);
		return R.ok("查询健身视频成功").put("data", jianshenshipinView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        JianshenshipinEntity jianshenshipin = jianshenshipinService.selectById(id);
		jianshenshipin.setClicknum(jianshenshipin.getClicknum()+1);
		jianshenshipinService.updateById(jianshenshipin);
        return R.ok().put("data", jianshenshipin);
    }

    /**
     * 前端详情
     */
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        JianshenshipinEntity jianshenshipin = jianshenshipinService.selectById(id);
		jianshenshipin.setClicknum(jianshenshipin.getClicknum()+1);
		jianshenshipinService.updateById(jianshenshipin);
        return R.ok().put("data", jianshenshipin);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody JianshenshipinEntity jianshenshipin, HttpServletRequest request){
    	jianshenshipin.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(jianshenshipin);

        jianshenshipinService.insert(jianshenshipin);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody JianshenshipinEntity jianshenshipin, HttpServletRequest request){
    	jianshenshipin.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(jianshenshipin);
    	jianshenshipin.setUserid((Long)request.getSession().getAttribute("userId"));

        jianshenshipinService.insert(jianshenshipin);
        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody JianshenshipinEntity jianshenshipin, HttpServletRequest request){
        //ValidatorUtils.validateEntity(jianshenshipin);
        jianshenshipinService.updateById(jianshenshipin);//全部更新
        return R.ok();
    }
    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        jianshenshipinService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
    /**
     * 提醒接口
     */
	@RequestMapping("/remind/{columnName}/{type}")
	public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, 
						 @PathVariable("type") String type,@RequestParam Map<String, Object> map) {
		map.put("column", columnName);
		map.put("type", type);
		
		if(type.equals("2")) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Calendar c = Calendar.getInstance();
			Date remindStartDate = null;
			Date remindEndDate = null;
			if(map.get("remindstart")!=null) {
				Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
				c.setTime(new Date()); 
				c.add(Calendar.DAY_OF_MONTH,remindStart);
				remindStartDate = c.getTime();
				map.put("remindstart", sdf.format(remindStartDate));
			}
			if(map.get("remindend")!=null) {
				Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
				c.setTime(new Date());
				c.add(Calendar.DAY_OF_MONTH,remindEnd);
				remindEndDate = c.getTime();
				map.put("remindend", sdf.format(remindEndDate));
			}
		}
		
		Wrapper<JianshenshipinEntity> wrapper = new EntityWrapper<JianshenshipinEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(columnName, map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(columnName, map.get("remindend"));
		}


		int count = jianshenshipinService.selectCount(wrapper);
		return R.ok().put("count", count);
	}
	


}
