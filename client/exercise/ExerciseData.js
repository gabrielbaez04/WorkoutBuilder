import React from 'react';

class ExerciseData extends React.Component {
    render() {
        return (
            <div>
                <form className="ui form error">
                    <div className="two fields">
                        <div className="field">
                        <label>Sets</label>
                        <input name="integer" type="text" value={this.props.data.sets}/>
                        </div>
                        <div className="field">
                        <label>Repetitions</label>
                        <input name="integer" type="text" value={this.props.data.repetitions}/>
                        </div>
                    </div>                  
                    <h4 className="ui header">Repetitions and weights</h4>
                    <div className="ui divider"></div>
                    <div className="field">
                        <div className="two fields">
                            <div className="disabled field">
                                <input type="text" placeholder="Previous Repetitions" value={this.props.data.prevRepetitions}/>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Actual Repetitions"/>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="two fields">
                            <div className="disabled field">
                                <input type="text" placeholder="Previous Weights" value={this.props.data.prevWeight}/>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Actual Weights"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ExerciseData;