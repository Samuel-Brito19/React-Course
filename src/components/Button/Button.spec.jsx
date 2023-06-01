import { render, screen } from "react-dom"
import React from "react"
//import {createRoot} from "react-dom/client"
import { fireEvent } from "@testing-library/react"
import { Button } from "."

describe('<Button/>', () => {
    it('Should render a button called "carregue mais posts"', () => {

        const fn = jest.fn()

        render(<Button onClick={fn} text="Carregue mais posts" />)

        const button = screen.getByRole('button', { name: / 'carregue mais posts'/i })


        expect(button).toBeInTheDocument()

        fireEvent.click(button)


    })
})