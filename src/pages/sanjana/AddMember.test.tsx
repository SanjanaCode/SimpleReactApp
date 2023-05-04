import React from 'react';
import AddMember from './AddMember';
import { render, fireEvent, screen } from "@testing-library/react";

describe('check if member details are appended to the list', () => {
    test('check array length', () => {
        render(<AddMember />);

        const memName = screen.getByTestId("name");
        const memRole = screen.getByTestId("role");
        const button = screen.getByTestId("button");
        const memList = screen.getByTestId("member-list");

        fireEvent.change(memName, {target: {value: 'Test Name'}});
        fireEvent.change(memRole, {target: {value: 'Test Role'}});
        fireEvent.click(button);
    
        expect(memList.childElementCount).toBe(2);

    });
});