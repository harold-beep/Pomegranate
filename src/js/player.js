const showText = document.getElementById('selected-music');

document.getElementById('music1').onclick =
    function (){
        document.getElementsByTagName('data-video') = '5qap5aO4i9A';
        showText.innerHTML = 'lofi hip hop radio - beats to relax/study to';
    }

document.getElementById('music2').onclick =
    function (){
        document.getElementsByTagName('data-video') = '-HWuaZyGk-E';
        showText.innerHTML = 'Ambient Lofi/Jazz';
    }

document.getElementById('music3').onclick =
    function (){
        document.getElementsByTagName('data-video') = 'DWcJFNfaw9c';
        showText.innerHTML = 'lofi hip hop radio - beats to sleep/chill to';
    }




/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Amit Agarwal
 Web: http://www.labnol.org/?p=26740 
*/
function onYouTubeIframeAPIReady(){
    var e=document.getElementById("youtube-audio"),t=document.createElement("img");
    t.setAttribute("id","youtube-icon"),t.style.cssText="cursor:pointer;cursor:hand",e.appendChild(t);
    var a=document.createElement("div");
    a.setAttribute("id","youtube-player"),e.appendChild(a);
    var o=function(e){var a=e?"IDzX9gL.png":"quyUPXN.png";
    t.setAttribute("src","https://i.imgur.com/"+a
    )};

    e.onclick=function(){
        r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
    };
    var r=new YT.Player("youtube-player",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}
}})}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Youtube API */
var scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/9fd4fd09\/www-widgetapi.vflset\/www-widgetapi.js';
    try{var ttPolicy=window.trustedTypes.createPolicy("youtube-widget-api",{createScriptURL:function(x){return x}});
    scriptUrl=ttPolicy.createScriptURL(scriptUrl)}catch(e){}if(!window["YT"])
    var YT={loading:0,loaded:0};
    if(!window["YTConfig"])var YTConfig={"host":"https://www.youtube.com"};
    if(!YT.loading){YT.loading=1;(function(){var l=[];
        YT.ready=function(f){if(YT.loaded)f();
    else l.push(f)};
    window.onYTReady=function(){YT.loaded=1;
    for(var i=0;i<l.length;i++)try{l[i]()}catch(e$0){}};
    YT.setConfig=function(c){for(var k in c)if(c.hasOwnProperty(k))YTConfig[k]=c[k]};
    var a=document.createElement("script");
    a.type="text/javascript";
    a.id="www-widgetapi-script";a.src=scriptUrl;
    a.async=true;var c=document.currentScript;
    if(c){var n=c.nonce||c.getAttribute("nonce");
    if(n)a.setAttribute("nonce",n)}
    var b=document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a,b)})
()};