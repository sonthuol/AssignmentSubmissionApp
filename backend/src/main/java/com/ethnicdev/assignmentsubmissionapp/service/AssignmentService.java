package com.ethnicdev.assignmentsubmissionapp.service;

import com.ethnicdev.assignmentsubmissionapp.entity.Assignment;
import com.ethnicdev.assignmentsubmissionapp.entity.User;
import com.ethnicdev.assignmentsubmissionapp.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

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

    public Set<Assignment> getAssignments(User user){
        return assignmentRepository.findByUser(user);
    }

    public Optional<Assignment> getAssignment(Long assignmentId, User user){
        return assignmentRepository.findById(assignmentId);
    }

    public Assignment save(Assignment assignment){
        return assignmentRepository.save(assignment);
    }
}
