import React from 'react'
import Sidebar from '../Sidebar'
import Grid from '../Grid'
import CheckButton from '../CheckButton'
import classes from './D3Sample.scss'

export const D3Sample = () => (
  <div>
    <div className={classes.sideBarContainer}>
        <Sidebar />
    </div>
    <div className={classes.gridContainer}>
        <Grid />
        <CheckButton />
    </div>
  </div>
)

export default D3Sample
