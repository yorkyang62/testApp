import { Component } from 'react';

export default class Base extends Component {
    constructor (props) {
        super(props);
    }

    componentDidShow () {
        console.log('我是基类');
    }
    render () {
        return '我是基类';
    }
}