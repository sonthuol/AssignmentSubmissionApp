package com.ethnicdev.assignmentsubmissionapp.controller;

import com.ethnicdev.assignmentsubmissionapp.entity.Assignment;
import com.ethnicdev.assignmentsubmissionapp.entity.User;
import com.ethnicdev.assignmentsubmissionapp.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/assignments")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService;
    @PostMapping("")
    public ResponseEntity<?> createAssignment(@AuthenticationPrincipal User user){
        Assignment assignment = assignmentService.save(user);
        return ResponseEntity.ok(assignment);
    }
}
