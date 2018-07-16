/**
 * Handler for a input onChange event
 */
export function handleChange(e) {
    this.setState({
        [e.target.id]: e.target.value
    });
}