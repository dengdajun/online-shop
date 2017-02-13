package com.davinci.core.exceptionHandle;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by YoungMan on 2017/2/13.
 */
@ControllerAdvice
public class ControllerExceptionAdvice {

    @ExceptionHandler(value=Exception.class)
    public String exception(Exception exception, HttpServletRequest request, HttpServletResponse response,RedirectAttributes model){
        try {
            String msg=exception.getMessage().split(":")[2];
            response.getOutputStream().print (msg);
            request.setAttribute("errorMsg",msg);
//            登录异常处理
            String logurl=request.getContextPath()+"/sys/doLogin";
            if(logurl.equals(request.getRequestURI())){
                model.addFlashAttribute("errorMsg",msg);
                return "redirect:/sys/login";
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
