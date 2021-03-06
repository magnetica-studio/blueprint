import AnimatedFlexBoxExample from './AnimatedFlexBox';
import Label from './Label';
import Meter from './Meter';
import React, { Component } from 'react';
import Slider from './Slider';
import {
  Canvas,
  Image,
  View,
  Picker,
} from 'juce-blueprint';


function animatedDraw(ctx) {
  let now = (Date.now() / 10);
  let width = now % 100;
  let red = Math.sqrt(width / 100) * 255;
  let hex = Math.floor(red).toString(16);

  // TODO: Should update the ctx proxy to convert from javascript hex strings, aka
  // #ffffaa to juce's Colour::fromString() API which is ffffffaa.
  ctx.fillStyle = `ff${hex}ffaa`;
  ctx.fillRect(0, 0, width, 2);
}

class App extends Component {
  render() {
    // Uncomment here to watch the animated flex box example in action
    // return (
    //   <View {...styles.container}>
    //     <AnimatedFlexBoxExample />
    //   </View>
    // );

    // juceのComboBoxはoptionのvalueはint. 連番でなくてもいい
    const options = [
      { label: 'strawberry', value: 1 },
      { label: 'chocolate', value: 2 },
      { label: 'banana', value: 3 }
    ]

    return (
      <View {...styles.container}>
        <View {...styles.content}>
          <Image source={require('./logo.png')} {...styles.logo} />
          <Slider paramId="MainGain" {...styles.knob}>
            <Label paramId="MainGain" {...styles.label} />
          </Slider>
          <Meter {...styles.meter} />
          <Canvas {...styles.canvas} animate={true} onDraw={animatedDraw} />
          <Picker
              width="100%"
              height={20}
              arrow-color="00ffffff"
              background-color={`00000000`}
              color={`ffffffff`}
              outline-color="00000000"
              focused-outline-color="ffffffff"
              button-color="ffff0000"
              popup-color="88000000"
              highlight-color="ff00ff55"
              highlight-background-color="ff673938"
              options={options}
              onChange={console.log}
              no-arrow
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    'width': '100%',
    'height': '100%',
    'background-color': 'ff17191f',
    'justify-content': 'center',
    'align-items': 'center',
  },
  content: {
    'flex': 1.0,
    'flex-direction': 'column',
    'justify-content': 'space-around',
    'align-items': 'center',
    'padding': 24.0,
    'max-width': 600,
    'aspect-ratio': 400.0 / 240.0,
  },
  logo: {
    'flex': 0.0,
    'width': '80%',
    'aspect-ratio': 281.6 / 35.0,
    'placement': Image.PlacementFlags.centred,
  },
  knob: {
    'min-width': 100.0,
    'min-height': 100.0,
    'width': '50%',
    'height': '50%',
  },
  label: {
    'flex': 1.0,
    'justify-content': 'center',
    'align-items': 'center',
  },
  meter: {
    'flex': 0.0,
    'width': 100.0,
    'height': 16.0,
  },
  canvas: {
    'flex': 0.0,
    'width': 100.0,
    'height': 2
  },
};

export default App;
