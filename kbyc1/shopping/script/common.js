//滑动产生删除按钮
function showDeleteBtn(parentbox, childbox) {
    mui('' + parentbox).on('dragstart', '' + childbox, function(e) {
        var startX = 0,
            disX = 0,
            moveX = 0,
            endX = 0,
            enddisX = 0,
            _this = $(this),
            __this = $(this)[0],
            _this_del = _this.find('.delet_btn'),
            boundX = _this_del.width();
        if (_this_del.hasClass('_this_del_show')) {
            return
        }
        var startX = e.detail.touches[0].clientX;
        __this.addEventListener('drag', function(e) {
            moveX = (e.detail.touches[0].clientX);
            disX = (startX - moveX); //滑动距离，左滑为正
            if (disX < 0 || disX == 0) {
                _this.css({
                    transform: 'translateX(-' + 0 + 'px)',
                });
                // $('._this_del').removeClass('_this_del_show')
            } else if (disX > 0) {
                if (_this_del.hasClass('_this_del_show')) {
                    return
                }
                _this.css({
                    transform: 'translateX(-' + disX + 'px)',
                });
                if (disX - boundX > 0) {
                    _this.css({
                        transform: 'translateX(-' + boundX + 'px)',
                    });
                }
            }
        });
        __this.addEventListener('dragend', function(e) {
            endX = (e.detail.touches[0].clientX);
            enddisX = endX - startX;
            if ((-enddisX) > (boundX / 2)) {
                _this_del.addClass('_this_del_show') //标记删除按钮是否已完全出现
                _this.css({
                    transform: 'translateX(-' + boundX + 'px)',
                });
            } else {

                _this_del.removeClass('_this_del_show')
                _this.css({
                    transform: 'translateX(-' + 0 + 'px)',
                });
            }
        });
    });

}
// tabs选项卡 固定的类名 .tabs .tab_areas .active_tab_area
function createTabs(a, b,c) {
    // body...
    mui('' + a).on('tap', '' + b, function() {
        var i = $(this).index();
        $('.tab_areas>div').eq(i).addClass('active_tab_area').siblings().removeClass('active_tab_area');
        $(this).addClass(''+c).siblings(''+b).removeClass(''+c)
    })
}
//点击进行星级评价
// pparent是parent的父级
function starEvaluate(parent, pparent) {
    mui("" + parent).on('tap', '.evaluate_star', function() {
        var index = $(this).index();
        var starBox = $(this).parents('' + pparent);
        var i = 0,
            _thisStars = starBox.find('.evaluate_star');
        _thisStars.each(function() {
            $(this).css({ 'color': "#ccc" })
        })
        _thisStars.each(function() {
            if (i <= index) {
                $(this).css({ 'color': "#ffad2d" })
                i += 1;
            }
            return;
        })
    });
}
//checkbox
;(function($) {
    $.fn.extend({
        checkbox: function() {
            this.each(function() {
                var $this = $(this).find('i');
                if ($this.hasClass("icon-checkboxblank")) {
                    $this.parent().siblings("input").prop("checked", "checked");
                } else {
                    $this.parent().siblings("input").removeAttr("checked");
                }
                $(this).on("click", function() {
                    if ($this.hasClass("icon-checkboxblank")) {
                        $this.parent().siblings("input").removeAttr("checked");
                        $this.removeClass("icon-checkboxblank").addClass("icon-checkbox-copy");
                    } else {
                        $this.parent().siblings("input").prop("checked", "checked");
                        $this.removeClass("icon-checkbox-copy").addClass("icon-checkboxblank");
                    }
                });
            });
        }
    });
})(jQuery);
// 防止为数字类型时maxlength失效
$('input').bind('input propertychange', function() {
    if ($(this).attr('type')=='number') {
        var mxal =$(this).attr('maxlength');
        if ($(this).val().length>mxal) {
            $(this).val($(this).val().slice(0,mxal))
        }
    }
});













