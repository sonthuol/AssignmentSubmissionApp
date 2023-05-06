package com.ethnicdev.assignmentsubmissionapp.service;

import com.ethnicdev.assignmentsubmissionapp.entity.Assignment;
import com.ethnicdev.assignmentsubmissionapp.entity.User;
import com.ethnicdev.assignmentsubmissionapp.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepository;
    public Assignment save(User user) {
        Assignment assignment = new Assignment();
        assignment.setStatus("Needs to be submitted");
        assignment.setUser(user);

        return assignmentRepository.save(assignment);
    }
}
