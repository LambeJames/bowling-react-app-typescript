import * as React from 'react';
import { connect } from 'react-redux';
import { addRoll } from '../actions'

const dispatchProps = {
    addItem: addRoll
}

interface AddScoreProps {
    addItem : (roll: string) => void
}

interface AddScoreState {
    roll: string
}

class AddScore extends React.Component<AddScoreProps, AddScoreState> {
    readonly state = { roll: ''}

    handleInputChange: React.ReactEventHandler<HTMLInputElement> = ev => {
        this.setState({ roll: ev.currentTarget.value });
    };
    
    handleAddClick = () => {
        this.props.addItem(this.state.roll);
        this.setState({ roll: '' });
    };

    render() {
        const { roll } = this.state;
    
        return (
            <form
                onSubmit={ev => {
                    ev.preventDefault();
                }}
            >
            <input
                style={{ width: 450 }}
                type="text"
                placeholder="Enter new item"
                value={roll}
                onChange={this.handleInputChange}
            />
            &nbsp;
            <button type="submit" onClick={this.handleAddClick} disabled={!roll}>
              Add
            </button>
          </form>
        );
    }
}

export default connect(
    null,
    dispatchProps
)(AddScore);