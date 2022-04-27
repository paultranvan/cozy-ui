import { makeTypoColor, makeButtonBorder } from './helpers'

const theme = {
  palette: {
    primary: { main: 'white' },
    text: { disabled: 'lightGrey', primary: 'grey' },
    border: { main: 'lightGrey' }
  }
}

describe('makeTypoColor', () => {
  it('should be correct color by default', () => {
    const res = makeTypoColor({ theme, active: false, disabled: false })

    expect(res).toBe('grey')
  })

  it('should be correct color when disabled', () => {
    const res = makeTypoColor({ theme, active: false, disabled: true })

    expect(res).toBe('lightGrey')
  })

  it('should be correct color when active', () => {
    const res = makeTypoColor({ theme, active: true, disabled: false })

    expect(res).toBe('white')
  })

  it('should be correct color when active disabled', () => {
    const res = makeTypoColor({ theme, active: true, disabled: true })

    expect(res).toBe('lightGrey')
  })
})

describe('makeButtonBorder', () => {
  it('should be correct color by default', () => {
    const res = makeButtonBorder({ theme, active: false, disabled: false })

    expect(res).toBe('1px solid lightGrey')
  })

  it('should be correct color when disabled', () => {
    const res = makeButtonBorder({ theme, active: false, disabled: true })

    expect(res).toBe('1px solid lightGrey')
  })

  it('should be correct color when active', () => {
    const res = makeButtonBorder({ theme, active: true, disabled: false })

    expect(res).toBe('1px solid transparent')
  })

  it('should be correct color when active disabled', () => {
    const res = makeButtonBorder({ theme, active: true, disabled: true })

    expect(res).toBe('1px solid lightGrey')
  })
})
