import React, { Component } from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

class App extends Component {
    render() {
        return (
            <ColorProvider>
                <div>
                    <SelectColors />
                    <ColorBox />
                </div>
            </ColorProvider>
        );
    }
}

export default App;
