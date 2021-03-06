import React from 'react'
import { Box, Text, Button } from 'grommet'
import RoboPic from './RoboPic'

const RoboListItem = (props) => (
  <Box
    direction='row-responsive'
    justify='start'
    border='all'
    round
  >
    <Box width='small'>
      <RoboPic roboId={props.robo.id} />
    </Box>
    <Box align='center' style={{ paddingTop: 75 }}>
      <Text size='large'>{props.robo.name}</Text>
      <Text size='medium'>{props.robo.owner}</Text>
      <Button
        primary
        onClick={() => props.onClickAttack(props.robo.id)}
      >
        Attack
      </Button>
    </Box>
  </Box>
)

export default RoboListItem
