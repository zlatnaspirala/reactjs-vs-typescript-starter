import * as React from "react";

interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class ProjectName extends React.Component<HelloProps, {}> {
    render() {
        return <h1>ProjectName : {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
