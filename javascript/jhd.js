window.onload = function () {
    var content = document.getElementById('content');
    var oBox = getByClass(content,'box');
    var removeall = document.getElementById('btn');
    var removearr = getByClass(content,'aa');
    var removestr = content.getElementsByTagName('i');

    //删除全部：
    removeall.onclick = function(){
            if(this.className == ''){
                this.className = 'active';
            } else {
                this.className = '';
            }

            for(var i=0;i<removearr.length;i++){
                removearr[i].className ='aa ' + this.className;
            }

            for(var i=0;i<removestr.length;i++){
                removestr[i].className ='aa ' +  this.className
            }
    }

    //hasClass
    function hasClass(obj,sClass) {
        var oldClass = obj.className;
        var re = new RegExp('\\b' + sClass + '\\b');
        if (re.test(oldClass)) {
            return true;
        } else {
            return false;
        }
    }

    //isCheckAll
    function isCheckedAll(){
        var content = document.getElementById('content');
        var removerarr = getByClass(content,'aa');
        var removeall = document.getElementById('btn');

        for(var i=0;i<removerarr.length;i++){

            if( !hasClass(removerarr[i],'active' )){
                removeall.className = '';
                break;
            }

            if( i == removerarr.length - 1){
                removeall.className = 'active';
            }
        }
    }

    //isCheck,每一组按钮和单个小按钮
    function isCheck(clsname) {
        var bigbtn = clsname.getElementsByTagName('span')[0];
        var smallbtn = clsname.getElementsByTagName('i');
        var oldName=bigbtn.className;

        bigbtn.onclick = function () {

            if(hasClass(this,'active')){
                this.className = 'aa'
            } else {
                this.className += ' active';
            }

            for(var i=0;i<smallbtn.length;i++){
                smallbtn[i].className = this.className;
            }

            isCheckedAll();

        }

        for (var i = 0; i < smallbtn.length; i++) {
            smallbtn[i].onclick = function () {
                if(hasClass(this,"active")){
                    this.className = ""
                } else {
                    this.className += " active";
                }


                var count = 0;

                for(var i = 0; i < smallbtn.length; i++){

                    if(hasClass(smallbtn[i],"active")){
                        count++;
                    }
                }


                if(count == smallbtn.length){
                    bigbtn.className += " active";
                } else {
                    bigbtn.className = oldName;
                }

                isCheckedAll();

            }
        }
    }

    for(var i=0;i<oBox.length;i++){
        isCheck(oBox[i]);
    }

    //价格有变动
    (function () {
        var oTip = document.getElementById('tip');
        var oXjg = document.getElementById('xinjiage');
        var closexjg = document.getElementById('closexjg');

        oTip.onclick = function(){
            oXjg.style.display = 'block';
        }

        closexjg.onclick = function(){
            oXjg.style.display = 'none';
        }
    })();

    //购买数量增加按钮
    (function(){
        var content = document.getElementById('content');
        var listCenter = getByClass(content,'list-center-right');



        function calculate(aClass){
            var oJia = aClass.getElementsByTagName('a')[1];
            var oJian = aClass.getElementsByTagName('a')[0];
            var oSpan = aClass.getElementsByTagName('span')[0];
            var oHide = aClass.getElementsByTagName('small')[0];
            var Num = Number(oSpan.innerHTML);

            oJia.onclick = function(){
                Num++;
                if (Num > 1) {
                    oHide.style.display = 'none';
                    oJian.className = 'jian';
                }
                oSpan.innerHTML = Num;
            }

            oJian.onclick = function(){
                Num--;
                if (Num < 1) {
                    oHide.style.display = 'block';
                    Num = 1;
                    this.className = 'active'
                }
                oSpan.innerHTML = Num;
            }

        }

        for(var i=0;i<listCenter.length;i++){
            calculate(listCenter[i]);
        }

    })();

    //mask弹出层
    (function(){
        var oMask = document.getElementById('mask');
        var content = document.getElementById('content');
        var clientHeight = document.body.clientHeight;
        var remove = getByClass(content,'remove');
        var collect = getByClass(content,'collect');
        var closeMask = getByClass(document,'close-mask');
        var maskRemove = getByClass(document,'mask-main-remove')[0];
        var maskCollect = getByClass(document,'mask-main-collect')[0];
        var checkzs = document.getElementById('collectzs');
        var collBtn = document.getElementById('collbtn');

        oMask.style.height = clientHeight + 'px';

        //收藏夹不再提示按钮：
        checkzs.onclick = function(){
            if(this.checked == true){
                collBtn.className = 'collectactive';
            }else{
                collBtn.className = 'collectzs';
            }
        }

        //弹出层右上角关闭按钮
        for(var i=0;i<closeMask.length;i++){
            closeMask[i].onclick = function(){
                oMask.style.display = 'none';
                maskRemove.style.display = 'none';
                maskCollect.style.display = 'none';
            }
        }

        //删除按钮点击
        for(var i=0;i<remove.length;i++){
            remove[i].onclick = function(){
                oMask.style.display = 'block';
                maskRemove.style.display = 'block';
                maskCollect.style.display = 'none';
            }
        }

        //收藏按钮点击
        for(var i=0;i<collect.length;i++){
            collect[i].onclick = function(){
                oMask.style.display = 'block';
                maskRemove.style.display = 'none';
                maskCollect.style.display = 'block';
            }
        }

    })();

}

