import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <ExampleForm/>
        );
    }
}

var TextBox = React.createClass({
    render: function () {
        return (
            <input
                type="text"
                className="form-control"
                name={this.props.name}
                onChange={this.props.onChange}
                placeholder={'Please input ' + this.props.name}
            />
        );
    }
});

var ExampleForm = React.createClass({
    getInitialState: function () {
        return ({
            form: {firstName: 'han1', lastName: 'nguyen dinh'}
        });

    },
    onChange: function (event) {
        this.state.form[event.target.name] = event.target.value;
        this.setState({form: this.state.form});
    },
    onSubmit: function (event) {
        event.preventDefault();
        alert('firstName: ' + this.state.form.firstName +
        ' lastName: ' + this.state.form.lastName);
    },
    render: function () {
        var self = this;
        return (
            <form onSubmit={this.onSubmit}>
                {Object.keys(this.state.form).map(function (key) {
                    return(
                        <TextBox name = {key} value = {self.state.form[key]} onChange = {self.onChange}/>
                    )
                })}
                <button type="submit" className="btn btn-success">submit</button>
            </form>
        )
    }
})