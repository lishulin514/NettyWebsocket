var WebSocketObj = (function(){
    var socket;
    function init(serverUrl){
        if(!window.WebSocket){
            window.WebSocket = window.MozWebSocket;
        }
        if(window.WebSocket){
            socket = new WebSocket(serverUrl);
            socket.onopen = function (ev) {
                var ta = document.getElementById('responseContent');
                ta.value += "您当前的浏览器支持websocket";
            };

            socket.onmessage = function (ev) {
                var ta = document.getElementById('responseContent');
                ta.value += event.data + "\r\n";
            };

            socket.onclose = function (ev) {
                alert("关闭")
                var ta = document.getElementById('responseContent');
                ta.value += "";
                ta.value += "WebSocket连接已经关闭 \r\n";
            };
        }else{
            alert("您的浏览器不支持WebSocket");
        }
    }

    function send(message){
        if(!window.WebSocket){
            return;
        }
        if(socket.readyState == WebSocket.OPEN){
            socket.send(message);
        }else{
            alert("WebSocket连接没有建立成功");
        }
    }
    return {
        init:init ,
        send:send
    }
})();


