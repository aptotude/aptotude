import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoRow from '../../components/Row/AptoRow';
import AptoCol from '../../components/Column/AptoCol';

import './variableStories.scss';

class Colors extends React.Component {
    public render() {
        return (
            <div>
                <h2>Color Swatches</h2>
                <h3>Gray Color Family</h3>
                <AptoRow className="colorSwatches">
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-800">#212121</span>$gray-700</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-700">#616161</span>$gray-700</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-650">#808080</span>$gray-650</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-600">#9E9E9E</span>$gray-600</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-550">#908e8e</span>$gray-550</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-500">#BDBDBD</span>$gray-500</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-450">#DEDEDE</span>$gray-450</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-400">#E0E0E0</span>$gray-400</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-300">#EEEEEE</span>$gray-300</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-200">#F5F5F5</span>$gray-200</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch gray-100">#FAFAFA</span>$gray-100</AptoCol>
                </AptoRow>

                <h3>Blue Color Family</h3>
                <AptoRow className="colorSwatches">
                    <AptoCol xs="6" sm="2"><span className="colorSwatch blue-800">#063F6D</span>$blue-800</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch blue-700">#0667B5</span>$blue-700</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch blue-600">#0087F4</span>$blue-600</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch blue-500">#64B5F6</span>$blue-500</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch blue-400">#BBDEFB</span>$blue-400</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch blue-300">#EDF4FA</span>$blue-300</AptoCol>
                </AptoRow>

                <h3>Orange Color Family</h3>
                <AptoRow className="colorSwatches">
                    <AptoCol xs="6" sm="2"><span className="colorSwatch orange-700">#D48004</span>$orange-700</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch orange-500">#FF9800</span>$orange-500</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch orange-400">#F6A623</span>$orange-400</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch orange-350">#FAC68C</span>$orange-350</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch orange-300">#FDDFB4</span>$orange-300</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch orange-200">#FFF2E3</span>$orange-200</AptoCol>
                </AptoRow>

                <h3>Red Color Family</h3>
                <AptoRow className="colorSwatches">
                    <AptoCol xs="6" sm="2"><span className="colorSwatch red-700">#981818</span>$red-700</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch red-500">#D32F2F</span>$red-500</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch red-400">#dc3545</span>$red-400</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch red-300">#FEE9E9</span>$red-300</AptoCol>
                </AptoRow>

                <h3>Green Color Family</h3>
                <AptoRow className="colorSwatches">
                    <AptoCol xs="6" sm="2"><span className="colorSwatch green-700">#4CAF50</span>$green-700</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch green-500">#61DC66</span>$green-500</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch green-300">#E4F7E5</span>$green-300</AptoCol>
                </AptoRow>

                <h3>Yellow Color Family</h3>
                <AptoRow className="colorSwatches">
                    <AptoCol xs="6" sm="2"><span className="colorSwatch yellow-700">#B89D11</span>$yellow-700</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch yellow-600">#DCBC13</span>$yellow-600</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch yellow-500">#F9D100</span>$yellow-500</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch yellow-300">#FFF9D4</span>$yellow-300</AptoCol>
                </AptoRow>

                <h3>Purple Color Family</h3>
                <AptoRow className="colorSwatches">
                    <AptoCol xs="6" sm="2"><span className="colorSwatch purple-500">#b175e8</span>$purple-500</AptoCol>
                </AptoRow>

                <hr />

                <h2>Named Colors</h2>
                <AptoRow className="colorSwatches">
                    <AptoCol xs="6" sm="2"><span className="colorSwatch black">#212121</span>$black</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch white">#ffffff</span>$white</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch primary-blue">#64B5F6</span>$primary-blue</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch danger">#981818</span>$danger</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch warning">#FF9800</span>$warning</AptoCol>
                    <AptoCol xs="6" sm="2"><span className="colorSwatch success">#4CAF50</span>$success</AptoCol>
                </AptoRow>

                <hr />

                <h2>Font Sizes</h2>
                <p className="font-size-xl">$font-size-xl (2.2rem / 22px)</p>
                <p className="font-size-lg">$font-size-lg (1.8rem / 18px)</p>
                <p className="font-size-base">$font-size-base (1.4rem / 14px)</p>
                <p className="font-size-md">$font-size-md (1.2rem 12px)</p>
                <p className="font-size-sm">$font-size-sm (1.0rem 10px)</p>

                <hr />

                <h2>Font Weights</h2>
                <p className="font-weight-light">$font-weight-light (400)</p>
                <p className="font-weight-normal">$font-weight-normal (500)</p>
                <p className="font-weight-semibold">$font-weight-semibold (600)</p>
                <p className="font-weight-bold">$font-weight-bold (700)</p>
            </div>
        );
    }
}

storiesOf('Theme', module)
    .add('Sass Variables', () => {
        return (
            <Colors />
        );
    })
;
