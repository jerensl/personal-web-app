// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { handlers } from './http'
import { QueryCache } from '@tanstack/react-query'

const queryCache = new QueryCache()
export const server = setupServer(...handlers)

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
    server.resetHandlers()
    queryCache.clear()
})
// Clean up after the tests are finished.
afterAll(() => server.close())
