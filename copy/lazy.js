// import $ from 'jquery';
    var getNews = function ($ct) {
        var pageCount = 10;
        var curPage = 1;
        var isLoad = true;
        $get = $('.load');
        $ct.prepend("<ul></ul>")

        $get.on('click',function () {
            getData();
        })
        //获取数据
        function getData() {
            isLoad = false;
            $.ajax({
                url: 'http://platform.sina.com.cn/slide/album_tech',
                dataType: 'jsonp',
                jsonp:"jsoncallback",
                data: {
                    app_key: '1271687855',
                    num: pageCount,
                    page: curPage
                }
            }).done(function(ret){
                if(ret && ret.status && ret.status.code === "0"){
                    callback(ret.data);
                    console.log(ret.data);//如果数据没问题，那么生成节点并摆放好位置
                    curPage++;
                }else{
                    console.log('get error data');
                }
                isLoad=true;
            });
        }
        //append数据
        function callback(data) {
            var itemArr = [];
            for (var i = 0; i<data.length; i++){
                itemArr[i]=0;
            }
            var html = "";
            $.each(data,function () {
                html += '<li>';
                html += '<a href="'+this.url+'">';
                html += '<img src="'+this.img_url+'" alt="">';
                html += '</a>';
                html += '<h4>'+this.short_name+'</h4>';
                html += '<p>'+this.short_intro+'</p></li>';
            });
            $ct.find('ul').append(html);
            $ct.find('img').on('load',function () {
                waterfall();
            })
        }
        //瀑布流布局

        function waterfall() {
            var clientWidth = $ct.width();
            var len = parseInt(clientWidth/$ct.find('li').outerWidth(true));
            console.log(len);
            var aLi = [];
            for (var i = 0; i < len; i++){
                aLi[i] = 0;
            }
            $ct.find('li').each(function () {
                console.log(1);
                var min = Math.min.apply(null,aLi);
                var index = aLi.indexOf(min);
                $(this).css({
                    left: index*$(this).outerWidth(true),
                    top: aLi[index]
                });
                aLi[index] += $(this).outerHeight(true);
                console.log(aLi);
                $ct.find('ul').css('height',aLi[index]);
            });

        }
    }
module.exports = getNews;
