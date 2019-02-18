package org.poem;



import org.poem.init.InitService;
import org.springframework.boot.ApplicationArguments;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;


/**
 * @author poem
 */
@Component
@Order(1)
public class ApplicationRunner implements org.springframework.boot.ApplicationRunner {

    @Override
    public void run(ApplicationArguments applicationArguments) throws Exception {
        InitService initService= SpringUtils.getBean(InitService.class);
        initService.init();
    }
}
