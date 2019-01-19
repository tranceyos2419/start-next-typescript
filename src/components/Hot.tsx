import * as React from 'react';

export interface HotProps {
    hot: string;
}

export default class Hot extends React.Component<HotProps, any> {
    public render() {
        return (
            <div>
                <h3>Hot</h3>
                <p>{this.props.hot}</p>
            </div>
        );
    }
}
