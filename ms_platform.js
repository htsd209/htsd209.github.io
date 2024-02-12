var url = window.location.href;
var msic=['undef','seve-Tez Candy'];
var queryString = url.split('?')[1];
if (queryString) {
    var paramsArray = queryString.split('&');
    for(var i=0;i<paramsArray.length;i++) {
        var paramNameValuePair = paramsArray[i].split("=");
        
        if (paramNameValuePair.length == 2) {
            if(decodeURIComponent(paramNameValuePair[0]) == 'ms_id'){
                playerthe.innerHTML = "<audio controls='' id='player' src='audios\/"+decodeURIComponent(paramNameValuePair[1])+".mp3'></audio>";
                tit.innerHTML = msic[decodeURIComponent(paramNameValuePair[1])];
            }
            else{
                window.location.href='https://htsd209.github.io/musics.html';
            }
        }
    }
} else {
    window.location.href='https://htsd209.github.io/musics.html';
}
