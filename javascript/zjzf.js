/**
 * Created by zhaoshuai on 2015/11/11.
 */
window.onload = function () {
    //立即支付和融资支付
    (function () {
        var SubNav = document.getElementById('subnav');
        var aBtn = SubNav.getElementsByTagName('span');
        var aDiv = getByClass(document, 'hide');
        var zhiFu = document.getElementById('zhifu');
        var aLi = zhiFu.getElementsByTagName('li');
        var oPay = document.getElementById('pay');

        for (var i = 0; i < aBtn.length; i++) {
            aBtn[i].index = i;
            aBtn[i].onclick = function () {
                for (var i = 0; i < aBtn.length; i++) {
                    aBtn[i].className = '';
                    aDiv[i].style.display = 'none';
                }
                this.className = 'active';
                aDiv[this.index].style.display = 'block';
            }
        }

        for (var i = 0; i < aLi.length; i++) {
            aLi[i].onclick = function () {
                for (var i = 0; i < aLi.length; i++) {
                    aLi[i].className = '';
                }
                this.className = 'liactive';

                if (this.className == 'liactive') {
                    oPay.className = 'jihuo';
                } else {
                    oPay.className = '';
                }
            }

        }

    })();

    //完成支付弹窗
    (function(){
        var ozfMask = document.getElementById('zhifumask');
        var oPay = document.getElementById('pay');
        var clientH = document.body.clientHeight;
        var zfmask = document.getElementById('zfmask');
        var wczf = document.getElementById('wczhifu');

        oPay.onclick = function(){
            ozfMask.style.height = clientH + 'px';
            ozfMask.style.display = 'block';
            zfmask.style.display = 'block';
        }

        wczf.onclick = function(){
            ozfMask.style.display = 'none';
            zfmask.style.display = 'none';
        }

    })();

    //预付款比例下拉
    (function(){
        function mySelect (name) {
            var oSelect = document.getElementsByName(name)[0];
            //创建元素
            var oDiv = document.createElement("div");
            oDiv.className = "scale";
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

        mySelect('scale');

    })()
}





































