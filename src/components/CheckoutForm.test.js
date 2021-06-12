import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const submitButton = screen.getByRole('button', {name: /checkout/i})


    userEvent.type(firstName, 'John');
    userEvent.type(lastName, 'Iannuzzi')
    userEvent.type(address, '123 uzi lane');
    userEvent.type(city, 'Uziville');
    userEvent.type(state, 'uzopia');
    userEvent.type(zip, '666666');
    userEvent.click(submitButton);

    const success = screen.getAllByTestId(/successMessage/i);

    expect(success).toBeInTheDocument;
});
