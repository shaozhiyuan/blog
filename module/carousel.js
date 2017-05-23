define(["jquery"],function () {

    var carousel = (function () {
        function Carousel($ct) {
            this.$ct = $ct;
            this.init();
            this.bind();
        }
        Carousel.prototype.init = function () {
            var $imgct = this.$imgct = this.$ct.find('.img-ct');
            var firstLi = this.$ct.find('.img-ct li').first().clone();
            var lastLi = this.$ct.find('.img-ct li').last().clone();
            this.imgLength = this.$ct.find('.img-ct li').length;
            this.$width = this.$ct.find('.img-ct img').width();
            console.log(this.imgLength);
            this.pageIndex = 0;
            this.isRoll = true;
            $imgct.append(firstLi);
            $imgct.prepend(lastLi);
            $imgct.width($imgct.find('li').length*$imgct.find('li').width());
            $imgct.css('left',-this.$width);
        };
        Carousel.prototype.bind = function () {
            var _this = this;
            this.$preBtn = this.$ct.find('.btn-pre');
            this.$nextBtn = this.$ct.find('.btn-next');
            this.$whiteLi = this.$ct.find('.white>li');
            this.$nextBtn.on('click',function (e) {
                e.preventDefault();
                if(_this.isRoll){
                    _this.next(1)
                }
            });
            this.$preBtn.on('click',function (e) {
                e.preventDefault();
                if(_this.isRoll){
                    _this.pre(1)
                }
            });
            this.$whiteLi.on('click',function () {
                if(_this.isRoll){
                    var index = $(this).index();
                    var number = index-_this.pageIndex;
                    console.log(number);
                    if(number>0){
                        _this.next(number)
                    }
                    if(number<0){
                        _this.pre(-number)
                    }
                }
            })

        };
        Carousel.prototype.next = function (n) {
            var _this = this;
            _this.isRoll = false;
            _this.$imgct.animate({
                left: '-='+_this.$imgct.find('li').width()*n
            },function () {
                _this.pageIndex += n;
                if(_this.pageIndex === _this.imgLength){
                    _this.$imgct.css('left',-_this.$width);
                    _this.pageIndex = 0
                }
                _this.$whiteLi.removeClass("active");
                _this.$whiteLi.eq(_this.pageIndex).addClass("active");
                _this.isRoll = true;
            });
        };
        Carousel.prototype.pre = function (n) {
            console.log(1);
            var _this = this;
            _this.isRoll = false;
            _this.$imgct.animate({
                left: '+='+_this.$imgct.find('li').width()*n
            },function () {
                _this.pageIndex -= n;
                if(_this.pageIndex === -1){
                    _this.$imgct.css('left',-_this.$width*_this.imgLength);
                    _this.pageIndex = 3
                }
                _this.$whiteLi.removeClass("active");
                _this.$whiteLi.eq(_this.pageIndex).addClass("active");
                _this.isRoll = true;
            });
        };
        return{
            init: function ($ct) {
                $ct.each(function (i,val) {
                    console.log(val);
                    new Carousel($(val))
                })
            }
        }
    })();
    return carousel;
})