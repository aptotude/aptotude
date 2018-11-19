import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoParagraph from './AptoParagraph';

storiesOf('Text (Paragraph)', module)
    .add('Basic Usage', () => {
        return (
            <div>
                <AptoParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
                Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</AptoParagraph>
                <AptoParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
                Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</AptoParagraph>

                <h5>Compact Spacing using the
                <code>compact</code> Attribute puts consecutive paragraphs closer together</h5>
                <AptoParagraph compact>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
                Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</AptoParagraph>
                <AptoParagraph compact>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
                Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</AptoParagraph>
            </div>
        );
    })
;
