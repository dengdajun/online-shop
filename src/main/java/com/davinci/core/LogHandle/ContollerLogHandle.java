package com.davinci.core.logHandle;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.Arrays;

/**
 * Created by YoungMan on 2017/2/13.
 */
@Order(1)
@Aspect
@Component
public class ContollerLogHandle {
	private static Logger log = LoggerFactory.getLogger(ContollerLogHandle.class);

	@Around("execution(public * com.davinci.shop..controller.*.*(..))")
	public Object aroundMethod(ProceedingJoinPoint pjd){
		Object result = null;
		String methodName = pjd.getSignature().getName();
        String className=pjd.getTarget().getClass().getSimpleName();
        try {
        	System.out.println("aop 测试++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
			//前置通知
            log.debug(className+"."+methodName+"参数是："+Arrays.asList(pjd.getArgs()));
			//执行目标方法
			result = pjd.proceed();
			//返回通知
            log.debug(className+"."+methodName+"返回是："+result);
		} catch (Throwable e) {
			//异常通知
            log.info(className+"."+methodName+"产生异常："+e.getMessage());
			throw new RuntimeException(e);
		}
		//后置通知
//		System.out.println("The method " + methodName + " ends");
		return result;
	}
}
