/**
 * Created by zhaoshuai on 2015/11/9.
 */
window.onload = function () {
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

    (function(){
        var fPiao = document.getElementById('fpiao');
        var fpbtn = fPiao.getElementsByTagName('a');

        for(var i=0;i<fpbtn.length;i++){
            fpbtn[i].onclick = function(){
                for(var i=0;i<fpbtn.length;i++){
                    fpbtn[i].className = '';
                }
                this.className = 'fpactive';
            }
        }
    })();


}