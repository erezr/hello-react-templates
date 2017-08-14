define(['react', 'lodash', './form.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'form',

    getInitialState: function(){
      var defaultName = new URL(document.location.href).searchParams.get('name');
      return {name: defaultName};
    },

    onNameChange: function(e) {
      this.setState({name: e.target.value});
    },

    render: template
  });
});
