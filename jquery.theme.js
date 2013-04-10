/*
 *NAME:   jQuery plugin theme 0.0.1
 *URL:  	http://townke.com
 *AUTHOR:	blacklaw
 *EMAIL:	2577927145@qq.com
 *DEPENDS:
 *			jquery-1.9.1.js
 *	
 */
(function($,undefined){
	$.isDebug=false;
	var themeurl="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css";
	$('head').prepend("<link id='jquerytheme' rel=\"stylesheet\" href=\""+themeurl+"\" />");
	$.extend($,{
		setTheme:setTheme,
		theme:[
		'black-tie',//黑色领带
		'blitzer',//防卫线
		'cupertino',//苹果总部
		'dark-hive',//黑色蜂房
		'dot-luv',//点。爱情
		'eggplant',//茄子
		'excite-bike',//动感单车
		'flick',//弹
		'hot-sneaks',//热鞋
		'humanity',//仁慈
		'le-frog',//青蛙
		'mint-choc',//薄荷
		'overcast',//阴天
		'pepper-grinder',//胡椒磨坊
		'redmond',//微软总部
		'smoothness',//光滑
		'south-street',//南街
		'start',//开始
		'sunny',//晴天
		'swanky-purse',//炫耀钱包
		'trontastic',//
		'ui-darkness',//暗
		'ui-lightness',//亮
		'vader'//韦德
		]
	})
	function setTheme(index){
		//alert($.theme[index]);
		if(typeof(index)=='number')
		   themename=$.theme[index];
		else
		   themename=index;
		   $.debug(themename);
		$('#jquerytheme').attr('href',themeurl.replace('smoothness',themename));
	}
	$.debug=function(content){
	 	if($.isDebug)
		 alert(content);
	}
		
}
)(jQuery);
