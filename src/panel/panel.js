define(['react', 'lodash', './panel.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'panel',

    // getInitialState: function(){
    //   var defaultFirstName = new URL(document.location.href).searchParams.get('first');
    //   var defaultLasttName = new URL(document.location.href).searchParams.get('last');
    //   return {firstName: defaultFirstName,
    //     lastName: defaultLasttName
    //   };
    // },

    onChange: function(e) {
      console.log(e.target.value);
    },

    getInputs: function(){
      return ["firstName","lastName"]
    },

    render: template
});
});
