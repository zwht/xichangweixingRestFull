package org.poem.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Configuration
public class WebAppConfigurer extends WebMvcConfigurationSupport {

    private static final Logger logger = LoggerFactory.getLogger(WebAppConfigurer.class);

    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        logger.info("configureDefaultServletHandling");
        configurer.enable();
    }
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/anonymous/**").addResourceLocations("classpath:/webapp/anonymous/");
        //http://127.0.0.1:8088/admin/index.html#/
        registry.addResourceHandler("/admin/**").addResourceLocations("classpath:/webapp/admin/");
        super.addResourceHandlers(registry);
    }
}
