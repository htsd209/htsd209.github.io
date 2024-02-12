var url = window.location.href;
var msic=['undef','seve-Tez Candy'];
var queryString = url.split('?')[1];
if (queryString) {
    var paramsArray = queryString.split('&');
    for(var i=0;i<paramsArray.length;i++) {
        var paramNameValuePair = paramsArray[i].split("=");
        
        if (paramNameValuePair.length == 2) {
            if(decodeURIComponent(paramNameValuePair[0]) == 'ms_id'){
                console.log(decodeURIComponent(paramNameValuePair[0]));
                console.log(decodeURIComponent(paramNameValuePair[0]));
                document.getElementById('playerthe').innerHTML = "<audio controls='' id='player' src='audios/"+decodeURIComponent(paramNameValuePair[1])+".mp3'><\/audio>";
                console.log('music:played');
                console.log("<audio controls='' id='player' src='audios/"+decodeURIComponent(paramNameValuePair[1])+".mp3'><\/audio>");
                document.getElementById('tit').innerHTML = msic[decodeURIComponent(paramNameValuePair[1])];
                console.log("music:title showed!");
            }
            else{
                window.location.href='https://htsd209.github.io/musics.html';
            }
        }
    }
} else {
    window.location.href='https://htsd209.github.io/musics.html';
}
