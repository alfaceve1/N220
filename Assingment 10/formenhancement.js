var passForm = document.forms[0];
        var passBtn = passForm.getElementsByTagName('img')[0];
        function showPassword() {
            var imgSrc = passBtn.getAttribute('src');
            var hidePassImg = imgSrc.indexOf('hide');
            hidePassImg = hidePassImg<0;
            if(hidePassImg == false) {
                document.getElementsByTagName('img')[0].setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/showPassIcon.png");
                document.getElementById('pass').setAttribute('type', 'text');
            } else {
                document.getElementsByTagName('img')[0].setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/hidePassIcon.png");
                document.getElementById('pass').setAttribute('type', 'password');
                console.log("test test test");
            }
            console.log(imgSrc);
            console.log(hidePassImg);
        }
        passBtn.addEventListener('click', showPassword)