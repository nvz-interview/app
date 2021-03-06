import {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends PureComponent {
    static propTypes = {
        children: PropTypes.element.isRequired
    };

    static getDerivedStateFromError(error) {
        console.error(error);
    }

    componentDidCatch(error) {
        console.error(error);
    }

    render() {
        const {children} = this.props;
        return children;
    }
}
