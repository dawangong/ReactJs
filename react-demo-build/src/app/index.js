import React from 'react';
import { render } from 'react-dom';
import { LikeButton } from '../components/component';

const myDivElement = <div className="foo" />;
const button = <LikeButton />;
render([myDivElement, button], document.getElementById('root'));