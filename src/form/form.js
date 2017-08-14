define(['react', 'lodash', './form.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'form',

    getInitialState: function(){
      return {name: 'abc'};
    },

    onNameChange: function(e) {
      this.setState({name: e.target.value});
    },


    render: template
  });
});
