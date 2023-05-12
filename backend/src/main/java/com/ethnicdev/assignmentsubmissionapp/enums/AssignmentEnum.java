package com.ethnicdev.assignmentsubmissionapp.enums;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum AssignmentEnum {

    ASSIGNMENT_1(1,"Java"),
    ASSIGNMENT_2(2, "Go"),
    ASSIGNMENT_3(3, "PHP"),
    ASSIGNMENT_4(4, "C#"),
    ASSIGNMENT_5(5, "Python"),
    ASSIGNMENT_6(6, "R");

    private int assignmentNumber;
    private String assignmentName;

    AssignmentEnum(int assignmentNumber, String assignmentName){
        this.assignmentNumber = assignmentNumber;
        this.assignmentName = assignmentName;
    }

    public int getAssignmentNumber() {
        return this.assignmentNumber;
    }

    public String getAssignmentName(){
        return this.assignmentName;
    }
}
