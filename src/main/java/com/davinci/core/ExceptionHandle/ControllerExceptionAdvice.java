package com.davinci.core.exceptionHandle;

import com.davinci.core.exception.GeneralException;
import com.davinci.core.exception.RedirectnException;
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
    //其他异常
    @ExceptionHandler(value=GeneralException.class)
    public void exception(GeneralException exception, HttpServletRequest request, HttpServletResponse response){
        String[] msgs=exception.getMessage().split(":");
        try {
            response.getOutputStream().print(msgs[msgs.length-1]);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    //登录异常
    @ExceptionHandler(value=RedirectnException.class)
    public String logInException(RedirectnException exception, HttpServletRequest request, HttpServletResponse response,RedirectAttributes model){
            String[] msgs=exception.getMessage().split(":");
            model.addFlashAttribute("errorMsg",msgs[msgs.length-1]);
            return "redirect:/sys/login";
//            String logurl=request.getContextPath()+"/sys/doLogin";
//            if(logurl.equals(request.getRequestURI())){
//                model.addFlashAttribute("errorMsg",msg);
//                return "redirect:/sys/login";
//            }
    }
}
