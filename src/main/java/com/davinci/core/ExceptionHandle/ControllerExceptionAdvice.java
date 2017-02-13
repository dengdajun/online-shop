package com.davinci.core.ExceptionHandle;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by YoungMan on 2017/2/13.
 */
@ControllerAdvice
public class ControllerExceptionAdvice {

    @ExceptionHandler(value=Exception.class)
    public void exception(Exception exception, HttpServletRequest request, HttpServletResponse response){
        try {
            response.getOutputStream().print (exception.getMessage());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
