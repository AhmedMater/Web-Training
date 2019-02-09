package com.dorrar.model.annotation;

import com.dorrar.model.enums.Pages;

public @interface AuthorizePage {
    Pages[] value() default {};
}
