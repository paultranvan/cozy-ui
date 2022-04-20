This component can be used as a trigger to open menus, for example an ActionMenu component.

```jsx
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption'
]

;

<>
  <Grid container>
    <Grid item xs={6}>
      Default
      {variants.map((variant, index) => (
        <div key={index} className='u-mb-1'>
          <DropdownButton textVariant={variant}>
            {variant}
          </DropdownButton>
        </div>
      ))}
    </Grid>
    <Grid item xs={6}>
      Disabled
      {variants.map((variant, index) => (
        <div key={index} className='u-mb-1'>
          <DropdownButton textVariant={variant} disabled>
            {variant}
          </DropdownButton>
        </div>
      ))}
    </Grid>
  </Grid>
  <div style={{ border: '1px solid var(--borderMainColor)', width: '100%' }}>
    <DropdownButton fullWidth spaceBetween>
      Full width and space between text and icon
    </DropdownButton>
  </div>
</>
```
