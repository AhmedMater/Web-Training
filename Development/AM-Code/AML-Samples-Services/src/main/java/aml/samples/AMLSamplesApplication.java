package aml.samples;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"aml.db", "aml.samples"})
public class AMLSamplesApplication {

    public static void main(String[] args) {
        SpringApplication.run(AMLSamplesApplication.class, args);
    }
}
