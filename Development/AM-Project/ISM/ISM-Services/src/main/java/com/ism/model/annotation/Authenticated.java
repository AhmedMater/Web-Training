package com.ism.model.annotation;


import com.ism.model.authorization.AuthActions;
import com.ism.model.authorization.AuthViews;

import javax.ws.rs.NameBinding;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@NameBinding
@Retention(RUNTIME)
@Target({TYPE, METHOD})
public @interface Authenticated {
    AuthActions[] actions() default {};
    AuthViews[] views() default {};
}
