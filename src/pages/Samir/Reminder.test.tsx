import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reminder from "./Reminder"


describe("Reminder", () => {
    test("Assignments and button can be viewed", () => {
        render(<Reminder />);
        // get elements
        const clearButton = screen.getByTestId("clear-button");
        const assignmentTiles = screen.getAllByTestId("assignment-tiles");

        // make sure they exist in the document
        expect(clearButton).toBeInTheDocument();
        expect(assignmentTiles).toBeTruthy();
    });


    test("Assignments can be removed", () => {
        render(<Reminder />);

        // get elements
        const clearButton = screen.getByTestId("clear-button");
        const assignmentLength = screen.getByTestId("assignments-length");

        // make sure they exist in the document
        expect(clearButton).toBeInTheDocument();
        expect(assignmentLength).toBeInTheDocument();

        // click clear all
        fireEvent.click(clearButton);

        // check if the assignment length text has dropped to zero or not
        expect(assignmentLength).toHaveTextContent("0 Assignments for next month");
    });

});