package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author： 李树林
 * @description： 服务器的启动类
 * @date： 2018/8/24 13:37
 */
@SpringBootApplication
public class NettyWebsocketApplication {
    public static void main(String[] args) {
        SpringApplication.run(NettyWebsocketApplication.class, args);
    }
}
