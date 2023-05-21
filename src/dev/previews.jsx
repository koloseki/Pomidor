import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Timer from "../components/Timer";
import Display from "../components/Display";
import App from "../App";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Timer">
                <Timer/>
            </ComponentPreview>
            <ComponentPreview path="/Display">
                <Display/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews