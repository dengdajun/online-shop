package com.davinci.core.exception;

/**
 * Created by YoungMan on 2017/2/14.
 */
public class GeneralException extends  Throwable {
    public GeneralException() {
        super();
    }

    public GeneralException(String message) {
        super(message);
    }


    public GeneralException(String message, Throwable cause) {
        super(message, cause);
    }


    public GeneralException(Throwable cause) {
        super(cause);
    }


    protected GeneralException(String message, Throwable cause,
                        boolean enableSuppression,
                        boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
