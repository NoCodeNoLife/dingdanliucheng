/**
 * Created by zhaoshuai on 2015/11/4.
 */
window.onload = function () {
    //确认删除弹出层
    (function () {
        var oMask = document.getElementById('maskzs');
        var osure = document.getElementById('surezs');
        var CloseMask = getByClass(document, 'close-mask');
        var clientHeight = document.body.clientHeight;
        var clientWidth = document.body.clientWidth;
        var aRemove = getByClass(document, 'remove-mask');
        var aCollect = getByClass(document, 'collect-mask');
        var checkzs = document.getElementById('collectzs');
        var collbtn = document.getElementById('collbtn');
        var maskremove = getByClass(document, 'mask-main-remove')[0];
        var maskcollect = getByClass(document, 'mask-main-collect')[0];

        //收藏夹不再提示按钮
        checkzs.onclick = function () {
            if (this.checked == true) {
                collbtn.className = 'collectactive';
            } else {
                collbtn.className = 'collectzs';
            }
        }

        oMask.style.width = clientWidth + 'px';
        oMask.style.height = clientHeight + 'px';

        //删除
        for (var i = 0; i < aRemove.length; i++) {
            aRemove[i].onclick = function () {
                oMask.style.display = 'block';
                maskcollect.style.display = 'none';
                maskremove.style.display = 'block';
            }
        }

        for (var i = 0; i < aCollect.length; i++) {
            aCollect[i].onclick = function () {
                oMask.style.display = 'block';
                maskremove.style.display = 'none';
                maskcollect.style.display = 'block';
            }
        }

        osure.onclick = function () {
            oMask.style.display = 'none';
            checkzs.checked = false;
            collbtn.className = 'collectzs';
        }

        for (var i = 0; i < CloseMask.length; i++) {
            CloseMask[i].onclick = function () {
                oMask.style.display = 'none';
                checkzs.checked = false;
                collbtn.className = 'collectzs';
            }
        }


    })();

    //价格有变动
    (function () {
        var aTips = getByClass(document, 'tipszs');
        var aXinjiage = getByClass(document, 'xinjiage');
        var aClose = getByClass(document, 'close-xinjiage');

        for (var i = 0; i < aTips.length; i++) {
            aTips[i].index = i;
            aTips[i].onclick = function () {
                aXinjiage[this.index].style.display = 'block';
            }
        }

        for (var i = 0; i < aClose.length; i++) {
            aClose[i].index = i;
            aClose[i].onclick = function () {
                aXinjiage[this.index].style.display = 'none';
            }
        }

    })();

    //购买数量加减按钮
    (function () {
        var oMain = getByClass(document, 'content')[0];
        var agmsl = getByClass(oMain, 'list-center');

        function calculate(aclass) {
            var push = aclass.getElementsByTagName('a')[0];
            var add = aclass.getElementsByTagName('a')[1];
            var oInput = aclass.getElementsByTagName('input')[0];
            var oHide = aclass.getElementsByTagName('b')[0];
            var Num = Number(oInput.innerHTML);

            add.onclick = function () {

                Num++;
                if (Num > 1) {
                    oHide.style.display = 'none';
                }
                oInput.value = Num;
            }

            push.onclick = function () {
                Num--;
                if (Num < 1) {
                    oHide.style.display = 'block';
                    Num = 1;
                }
                oInput.value = Num;
            }

        }

        for (var i = 0; i < agmsl.length; i++) {
            calculate(agmsl[i]);
        }

    })();

}