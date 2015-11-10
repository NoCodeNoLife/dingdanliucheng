/**
 * Created by zhaoshuai on 2015/11/9.
 */
window.onload = function () {

    //显示隐藏全部收货地址
    (function () {
        var oBox = document.getElementById('box');
        var showAll = document.getElementById('showall');
        var BoxList = getByClass(oBox, 'boxlist');
        var arrAdress = oBox.getElementsByTagName('div');
        var arrSet = oBox.getElementsByTagName('span');

        //显示隐藏全部收货地址
        showAll.onclick = function () {

            if (this.className == 'showall') {
                move(oBox, {height: BoxList[0].offsetHeight * BoxList.length})
                this.className = 'showall-active';
                this.innerHTML = '收起全部地址';
            } else {
                this.className = 'showall';
                move(oBox, {height: 176});
                this.innerHTML = '显示全部地址';
            }

        }

        //设置为默认收货地址
        for (var i = 0; i < arrSet.length; i++) {
            arrSet[i].index = i;
            arrSet[i].onclick = function () {
                for (var i = 0; i < arrSet.length; i++) {
                    arrAdress[i].className = '';
                }
                arrAdress[this.index].className = 'adresslist-active';
            }
        }

    })();

    //发票选中状态
    (function () {
        var fPiao = document.getElementById('fpiao');
        var aShow = getByClass(fPiao,'show');
        var aBtn = document.getElementById('btn');
        var fpbtn = aBtn.getElementsByTagName('a');
        var creatZzs = document.getElementById('zzs');
        var aInput = creatZzs.getElementsByTagName('input');
        var zzsBc = document.getElementById('zzsbc');
        var zzsQx = document.getElementById('zzsqx');
        var oCreat = document.getElementById('creat');
        var aSpan = oCreat.getElementsByTagName('span');
        var oPtfp = document.getElementById('ptfp');
        var Ptfpbc = document.getElementById('ptfpbc');
        var Ptfpqx = document.getElementById('ptfpqx');
        var oModify = document.getElementById('modify');
        var oModify1 = document.getElementById('modify1');
        var PtfpCreat = document.getElementById('ptfpcreat');

        Ptfpbc.onclick = function(){
            PtfpCreat.getElementsByTagName('span')[0].innerHTML =  oPtfp.getElementsByTagName('input')[0].value;
            oPtfp.style.display = 'none';
            PtfpCreat.style.display = 'block';
        }

        Ptfpqx.onclick = function(){
            oPtfp.style.display = 'none';
        }

        oModify1.onclick = function(){
            PtfpCreat.style.display = 'none';
            oPtfp.style.display = 'block';
        }

        zzsBc.onclick = function(){
            for(var i=0;i<aInput.length;i++){
                aSpan[i].innerHTML = aInput[i].value;
            }
            creatZzs.style.display = 'none';
            oCreat.style.display = 'block';
        }

        zzsQx.onclick = function(){
            creatZzs.style.display = 'none';
        }

        oModify.onclick = function(){
            oCreat.style.display = 'none';
            creatZzs.style.display = 'block';
        }

        //点击显示隐藏
        for (var i = 0; i < fpbtn.length; i++) {
            fpbtn[i].index = i;
            fpbtn[i].onclick = function () {
                oCreat.style.display = 'none';
                PtfpCreat.style.display = 'none';
                for (var i = 0; i < fpbtn.length; i++) {
                    fpbtn[i].className = '';
                    aShow[i].style.display = 'none';
                }
                this.className = 'fpactive';
                aShow[this.index].style.display = 'block';
            }
        }
    })();

    //textarea输入字数提示和限制
    (function () {

        function txtTip(id1, id2) {
            var oTxt = document.getElementById(id1);

            oTxt.onkeyup = function () {
                var maxChars = 200;//最多字符数
                if (oTxt.value.length > maxChars)  oTxt.value = oTxt.value.substring(0, maxChars);
                var curr = maxChars - oTxt.value.length;
                document.getElementById(id2).innerHTML = curr.toString();
            };

            oTxt.onfocus = function () {
                if (this.innerHTML == '') {
                    this.innerHTML = '可以告诉供应商留言你的特殊要求例如：您期望的商品到货时间等信息！';
                } else {
                    this.innerHTML = '';
                }
            }

            oTxt.onblur = function () {
                if (this.innerHTML == '') {
                    this.innerHTML = '可以告诉供应商留言你的特殊要求例如：您期望的商品到货时间等信息！';
                }
            }
        }

        txtTip('txt', 'txtnum');
        txtTip('txt1', 'txtnum1');
    })();

    //订单数量增减
    (function () {

        var content = document.getElementById('content');
        var agmsl = getByClass(content, 'list-center');

        function calculate(aclass) {
            var push = aclass.getElementsByTagName('a')[0];
            var add = aclass.getElementsByTagName('a')[1];
            var oSpan = aclass.getElementsByTagName('span')[0];
            var oHide = aclass.getElementsByTagName('small')[0];
            var Num = Number(oSpan.innerHTML);

            add.onclick = function () {

                Num++;
                if (Num > 1) {
                    oHide.style.display = 'none';
                    push.className = 'jian';
                }
                oSpan.innerHTML = Num;
            }

            push.onclick = function () {
                Num--;
                if (Num < 1) {
                    oHide.style.display = 'block';
                    Num = 1;
                    this.className = 'active';
                }
                oSpan.innerHTML = Num;
            }

        }

        for (var i = 0; i < agmsl.length; i++) {
            calculate(agmsl[i]);
        }


    })();

    //发货方式和运费支付方式自定义下拉
    (function () {

        function mySelect(name) {
            var oSelect = document.getElementsByName(name)[0];
            //创建元素
            var oDiv = document.createElement("div");
            oDiv.className = "my-select";
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
        };

        mySelect('fhuofs');
        mySelect('yunfzf');
        mySelect('youhq');
        mySelect('fhuofs1');
        mySelect('yunfzf1');
        mySelect('youhq1');

    })();
}