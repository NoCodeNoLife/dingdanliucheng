/**
 * Created by zhaoshuai on 2015/11/12.
 */
window.onload = function () {
    //nav 导航
    (function () {
        var oNav = document.getElementById('nav');
        var oMove = document.getElementById('move');
        var aLi = oNav.getElementsByTagName('li');
        var onoff = true;

        for (var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onmouseover = function () {
                move(oMove, {left: this.index * 85 + this.index * 20, time: 500});

                this.onoff = false;
            };

            aLi[i].onmouseout = function () {
                if (this.onoff) {
                    move(oMove, {left: this.index * 85 + this.index * 20, time: 500});
                } else {
                    move(oMove, {left: 0, time: 500});
                }
            };

            aLi[i].onclick = function () {
                this.onoff = true;
                move(oMove, {left: this.index * 85 + this.index * 20, time: 500});
            }

        }

    })();

    //submenu:内容区域左侧导航
    (function () {
        var oList = document.getElementById('ContentLeft');
        var aBtn = oList.getElementsByTagName('h5');
        var aDiv = oList.getElementsByTagName('div');
        var aLi = null;
        var arrAli = [];
        for (var i = 0; i < aBtn.length; i++) {
            aBtn[i].index = i;
            aBtn[i].onclick = function () {
                if (this.className == 'active') {
                    move(aDiv[this.index], {height: 0, paddingTop: 0});
                    this.className = '';
                } else {
                    for (var i = 0; i < aDiv.length; i++) {
                        move(aDiv[i], {height: 0, paddingTop: 0})
                        aBtn[i].className = '';
                    }

                    var aLi = aDiv[this.index].getElementsByTagName('a');
                    move(aDiv[this.index], {height: 10 + 34 * aLi.length, paddingTop: 10});
                    aBtn[this.index].className = 'active';
                }
            }
        }
        //找元素，方便以后扩展；
        for (var i = 0; i < aDiv.length; i++) {
            aLi = aDiv[i].getElementsByTagName('a');
            for (var j = 0; j < aLi.length; j++) {
                arrAli.push(aLi[j]);
            }
        }
        for (var i = 0; i < arrAli.length; i++) {
            arrAli[i].onclick = function () {
                for (var i = 0; i < arrAli.length; i++) {
                    arrAli[i].style.color = '#666';
                }
                this.style.color = "#c00";
            }
        }


    })();

    //搜索框:
    (function () {
        var oSearch = document.getElementById('search');

        oSearch.onfocus = function () {
            this.value = '';
            this.style.color = '#666';
        }

        oSearch.onblur = function () {
            if (this.value == '') {
                this.value = '按商品名称/采购单号/供应商名称查询';
                this.style.color = '#999';
            } else {
                this.style.color = '#666';
            }
        }

    })();

}