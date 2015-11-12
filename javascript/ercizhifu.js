/**
 * Created by zhaoshuai on 2015/11/12.
 */
window.onload = function(){
    //更换银行卡
    (function(){
        var oBox = document.getElementById('zhifu');
        var ghBtn = oBox.getElementsByTagName('small');
        var aUl = oBox.getElementsByTagName('ul');

        for(var i=0;i<ghBtn.length;i++){
            ghBtn[i].index = i;
            ghBtn[i].onclick = function(){
                aUl[this.index].style.display = 'block';
            }
        }
    })();

    //选中银行卡
    (function(){
        var zhiFu = document.getElementById('zhifu');
        var aLi = zhiFu.getElementsByTagName('li');
        var oPay = document.getElementById('pay');


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

    //支付弹窗
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
}