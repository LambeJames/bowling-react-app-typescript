import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import { State } from '../reducers';

export const DisplayStore: React.FC = () => {
    const rolls = useSelector<State, string[]>(state => state.rolls);

    return (
      <ul>
        { rolls.map(r => <li>{r}</li>) }
      </ul>
    )
  }


/*interface propsFromState {
    rolls : string[]
}

const DisplayScore = ({rolls}: propsFromState) => {
    console.log(rolls);
    return (
        <ul>
            { 
                rolls.map(roll => 
                    { return (<li>{roll}</li>) }
                )
            }
        </ul>
      );
};

const mapStateToProps = (state: State) => ({
    rolls: state.rolls,
});

export default connect(mapStateToProps, null)(DisplayScore);*/
