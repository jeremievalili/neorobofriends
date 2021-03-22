import React from 'react' ;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. There is some errors, we are sorry for the inconvenient</h1>
        }
        return this.props.children
    }
}


export default ErrorBoundary;