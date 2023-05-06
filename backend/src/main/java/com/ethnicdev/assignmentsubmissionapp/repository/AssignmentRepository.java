package com.ethnicdev.assignmentsubmissionapp.repository;

import com.ethnicdev.assignmentsubmissionapp.entity.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}
