import { rest } from 'msw'
import React from 'react'
import { setupServer } from 'msw/node'
const { render, screen, waitForElementToBeRemoved, act } = require("@testing-library/react")
import { Home } from '.'



const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(ctx.json([
      {
        userId: 1,
        id: 1,
        title: "title 1",
        body: "body 1",
        url: 'img1.jpg'
      },
      {
        userId: 2,
        id: 2,
        title: "title 2",
        body: "body 2",
        url: 'img2.jpg'
      },
      {
        userId: 3,
        id: 3,
        title: "title 3",
        body: "body 3",
        url: 'img3.jpg'
      },
    ]))
  })
]

const server = setupServer(...handlers)

describe('<Home / >', () => {
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })
  it('sould render search,posts and load more', async () => {
    render(<Home />)
    const noMorePosts = screen.getByText('Não existem posts com essa palavra')

    await waitForElementToBeRemoved(noMorePosts, { timeout: 1000 })

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)

    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument()

    //expect(screen.getByRole('heading', { name: 'Search value: title1' }))

    // userEvent.click(button)
    // expect(screen.getByRole('heading'), {name: 'title 3 3}).toBeInTheDocument()
    // expect(button).toBeDesabled()


    //expect.assertions(1)
  })
})

