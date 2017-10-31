import React from 'react';

export default class BaseCompornent extends React.Component {
  render() {
      return (
        <div>
        <div onClick={()=>this.props.onClick()}>あああ {this.props.value}</div>
        </div>
      );
    }
}
BaseCompornent.propTypes = {
  // onClick: React.PropTypes.func,
  // value: React.PropTypes.string,
};