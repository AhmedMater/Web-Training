package com.dorrar.model.annotation;

import com.dorrar.model.enums.Actions;
import com.dorrar.model.enums.Pages;

import javax.ws.rs.NameBinding;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@NameBinding
@Retention(RUNTIME)
@Target({TYPE, METHOD})
public @interface Authenticate {
    Actions[] actions() default {};
    Pages[] pages() default {};
}
