var imgUrl = 'http://hnwechat.suodun.xin/Uploads/locksmith/'; //图片固定地址
var imgadress = 'http://hnwechat.suodun.xin';//数据库中取图片
//用于压缩图片的canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
//瓦片canvas
var tCanvas = document.createElement("canvas");
var tctx = tCanvas.getContext("2d");
// 左侧遮罩层
$('#user').click(function(){
	$('#dialog').css('left','0');
});
$('#dialog .mask').click(function(){
	$('#dialog').css('left','-100%');
});
//图片预览
function preview(imgObj){
    console.log($(imgObj)[0].src)
    $('#previewImg').css('display','flex');
    $('#previewImg img')[0].src = $(imgObj)[0].src;
}
// 点击隐藏预览
$('#previewImg').click(function(){
    $(this).css('display','none');
});
// 身份证号验证
function isIDcard(sId) {
    var aCity = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    };
    var iSum = 0
    var info = ""
    if (!/^\d{17}(\d|x)$/i.test(sId))
        return false;
    sId = sId.replace(/x$/i, "a");
    if (aCity[parseInt(sId.substr(0, 2))] == null)
        return false;
    var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"))
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()))
        return false;
    for (var i = 17; i >= 0; i--)
        iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11)
    if (iSum % 11 != 1)
        return false;
    return true;
}