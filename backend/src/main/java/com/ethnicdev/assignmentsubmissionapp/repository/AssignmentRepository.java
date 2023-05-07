package com.ethnicdev.assignmentsubmissionapp.repository;

import com.ethnicdev.assignmentsubmissionapp.entity.Assignment;
import com.ethnicdev.assignmentsubmissionapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {

    Set<Assignment> findByUser(User user);
}
