package com.edu.controller;

import com.edu.dto.EmployeeDto;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class EmployeeController {
    @GetMapping("/hr/add-employee")
    public String showForm(Model model) {
        model.addAttribute("employee", new EmployeeDto());
        return "employee-form";
    }

    @PostMapping("/hr/add-employee")
    public String saveEmployee(
            @Valid @ModelAttribute("employee") EmployeeDto employee,
            BindingResult bindingResult,
            Model model) {

        if (bindingResult.hasErrors()) {
            return "employee-form";
        }

        return "redirect:/hr/success";
    }

    @GetMapping("/hr/success")
    @ResponseBody
    public String success() {
        return "Thêm nhân viên thành công";
    }
}
