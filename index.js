import React, {Component as Base,} from 'react';

export const h = React.createElement;
export class Component extends Base {
    componentWillMount() {
        this.awake && (this.state = this.awake() || {});
    }

    componentDidMount() {
        this.start && this.start();
    }

    render() {
        return this.update(this.props, this.state);
    }
}