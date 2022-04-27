```jsx
import CircleButton from 'cozy-ui/transpiled/react/CircleButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import HeartIcon from 'cozy-ui/transpiled/react/Icons/Heart'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'

// <-- only useful for the documentation
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'

const columns = [{ title: 'default', disabled: false }, { title: 'disabled', disabled: true }]
const initialVariants = [{ default: true, active: false }]
// -->

;

<Variants initialVariants={initialVariants} radio={true} screenshotAllVariants>
  {variant => (
    <Grid container>
      {columns.map(column =>
        <Grid item xs={12} sm={6} className="u-mb-1" key={JSON.stringify(column)}>
          <Stack spacing="s">
            <Typography>{Object.values(column)[0]}</Typography>
            <CircleButton
              label="Button"
              disabled={Object.values(column)[1]}
              variant={Object.keys(variant).find(key => variant[key])}
            >
              <Icon icon={HeartIcon} />
            </CircleButton>
            <CircleButton
              className="u-ml-1"
              disabled={Object.values(column)[1]}
              variant={Object.keys(variant).find(key => variant[key])}
            >
              <Icon icon={PeopleIcon} />
            </CircleButton>
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```
