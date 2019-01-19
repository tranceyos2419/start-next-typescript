import * as React from 'react';

export interface AutoProps {
    auto: string;
}

export default class Auto extends React.Component<AutoProps, any> {
    public render() {
        return (
            <div>
                Auto
      </div>
        );
    }
}
