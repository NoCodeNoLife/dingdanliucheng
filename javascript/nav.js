/**
 * Created by zhaoshuai on 2015/11/12.
 */
window.onload = function () {
    //nav 导航
    (function () {
        var oNav = document.getElementById('nav');
        var oMove = document.getElementById('move');
        var aLi = oNav.getElementsByTagName('li');

        for (var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onmouseover = function () {
                move(oMove, {left: this.index * 85 + this.index*20});
            }
        }

    })();
}