
import React, { useState } from "react";
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext, } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      // here is where we change the background color, it's default was purple, now its a tealish blue
      brand: "#228BE6"
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',

    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} themeMode='dark' full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            {/* <AppBar>Hello Grommet! This is where our AppBar lives!</AppBar> */}
            <AppBar><Heading level='3' margin='none'>My App</Heading>
              {/* the code below allows you to add the sidebar once the bell icon is clicked */}
              <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box
                flex align='center'
                justify='center'>app body lorem
          </Box>
              {/* <Box
            width='medium'
            background='dark-2'
            elevation='small'
            align='center'
            justify='center'
          >
            sidebar
          </Box> */}

              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction='horizontal' open={showSidebar}>

                  <Box
                    flex
                    width='medium'
                    background='dark-2'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                    sidebar
              </Box>
                </Collapsible>
              ) : (
                  <Layer>
                    <Box
                      background='dark-2'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      sidebar
            </Box>
                  </Layer>
                )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}


export default App;
