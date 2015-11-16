/**
 * Created by zhaoshuai on 2015/11/16.
 */
(function () {
    var oBtn = document.getElementById('checkbtn');
    var oBox = document.getElementById('checkBox');
    var aBtn = oBox.getElementsByTagName('i');

    //大按钮
    oBtn.onclick = function () {

        if (this.className == 'active') {
            this.className = '';
        } else {
            this.className = 'active';
        }

        for (var i = 0; i < aBtn.length; i++) {
            aBtn[i].className = this.className;
        }
    }

    //小按钮
    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].onclick = function () {
            if (this.className == 'active') {
                this.className = '';
            } else {
                this.className = 'active';
            }

            var count = 0;
            for (var i = 0; i < aBtn.length; i++) {
                if (aBtn[i].className == 'active') {
                    count++;
                }
            }

            if (count == aBtn.length) {
                oBtn.className = 'active';
            } else {
                oBtn.className = '';
            }

        }
    }

})();

//修改收货地址
(function(){
    var oModify = document.getElementById('modify');
    var oMask = document.getElementById('maskwrap');
    var maskMain = document.getElementById('mask-main');
    var clientH = document.body.clientHeight;
    var colse = document.getElementById('close');

    oMask.style.height = clientH + 'px';

    oModify.onclick = function(){
        oMask.style.display = 'block';
        maskMain.style.display = 'block';
    }

    colse.onclick = function(){
        oMask.style.display = 'none';
        maskMain.style.display = 'none';
    }


    //新增收货地址下拉
    function mySelect(name) {
        var oSelect = document.getElementsByName(name)[0];
        //创建元素
        var oDiv = document.createElement("div");
        oDiv.className = "xinengdizhi";
        oSelect.parentNode.insertBefore(oDiv, oSelect);

        var oSpan = document.createElement("span");
        oSpan.innerHTML = oSelect.options[oSelect.selectedIndex].text;
        oDiv.appendChild(oSpan);

        oDiv.onmouseover = function () {
            oUl.style.display = "block";
        };
        oDiv.onmouseout = function () {
            oUl.style.display = "none";
        };
        var oUl = document.createElement("ul");
        oDiv.appendChild(oUl);
        //li
        for (var i = 0; i < oSelect.options.length; i++) {
            var oLi = document.createElement("li");
            oLi.innerHTML = oSelect.options[i].text;
            oUl.appendChild(oLi);

            (function (index) {
                oLi.onclick = function () {
                    oSpan.innerHTML = this.innerHTML;
                    oUl.style.display = "none";
                    oSelect.selectedIndex = index;
                };
            })(i);
        }
    }

    mySelect('sheng');
    mySelect('shi');
    mySelect('xian');
})();