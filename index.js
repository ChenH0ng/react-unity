import React, {Component as Base,} from 'react';

const ignore = {
    constructor: !0,
    componentDidMount: !0,
    componentWillMount: !0,
    componentWillUnmount: !0,
    componentWillReceiveProps: !0,
    shouldComponentUpdate: !0,
    componentWillUpdate: !0,
    componentDidUpdate: !0,
};

export const h = React.createElement;
export class Component extends Base {
    constructor(props) {
        super(props);
        for (let m of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {
            if (!ignore[m] && typeof this[m] === 'function') this[m] = this[m].bind(this);
        }
        const render = this.render;
        this.render = () => render(this.props, this.state);
    }

    componentWillMount() {
        this.awake && (this.state = this.awake() || {});
    }

    componentDidMount() {
        this.start && this.start();
    }
}