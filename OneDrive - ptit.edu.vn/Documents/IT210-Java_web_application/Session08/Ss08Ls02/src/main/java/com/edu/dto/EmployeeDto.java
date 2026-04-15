package com.edu.dto;

import jakarta.validation.constraints.*;

public class EmployeeDto {
    @Min(value = 18, message = "Tuổi phải >= 18")
    private Integer age;
    @NotBlank(message = "Email không được để trống")
    private String email;

    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}