import * as React from 'react';

export interface CardProps {
    title: string;
}

export interface CardState {
}

export default class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>
                <h3>Card</h3>
                <h5>{this.props.title}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nulla consequuntur nobis repellat autem aspernatur? Nemo est quidem fugit molestias praesentium illum rerum repellendus consequatur eveniet? Impedit voluptatibus magni quidem.</p>
            </div>
        );
    }
}
